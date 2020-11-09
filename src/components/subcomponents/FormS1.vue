<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4">
            <validation-provider
              v-slot="{ errors }"
              name="First Name"
              rules="required"
            >
              <v-text-field
                v-model="firstName"
                :error-messages="errors"
                label="First Name"
                required
                outlined
              ></v-text-field>
            </validation-provider>
          </v-col>
           <v-col
            cols="12"
            md="4">
            <validation-provider
              v-slot="{ errors }"
              name="Last Name"
              rules="required"
            >
              <v-text-field
                v-model="lastName"
                :error-messages="errors"
                label="Last Name"
                required
                outlined
              ></v-text-field>
            </validation-provider>
           </v-col>
        </v-row>
        <v-row>
          <v-btn
            class="mr-4"
            type="submit"
            :disabled="invalid"
            color="primary"
            @click="nextStep"
          >
            Continue
          </v-btn>
          <v-btn text @click="clear">
            Cancel
          </v-btn>
        </v-row>
      </v-container>
    </form>
  </validation-observer>
</template>

<script>

import { required } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

export default {

    components: {
      ValidationProvider,
      ValidationObserver,
    },

    data: () => ({
      firstName: '',
      lastName: '',
    }),
    methods: {

      nextStep() {
        this.saveData()
        this.increment()
      },
      saveData() {
        this.$store.dispatch('setName', { firstName: this.firstName, lastName: this.lastName })
        
      },
      increment() {
        this.$store.dispatch('incrementStep')
      },
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.firstName = ''
        this.lastName = ''
        this.$refs.observer.reset()
      },
    },
    
}
</script>