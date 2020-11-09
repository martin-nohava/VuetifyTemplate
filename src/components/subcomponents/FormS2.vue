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
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
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

  import { required, email } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },

    data: () => ({
      email: '',
    }),
    methods: {
      nextStep() {
          this.saveData()
          this.increment()
      },
      saveData() {
          this.$store.dispatch('setEmail', this.email)
      },
      increment() {
          this.$store.dispatch('incrementStep')
      },
      submit () {
      this.$refs.observer.validate()
      },
      clear () {
        this.email = ''
        this.$refs.observer.reset()
      },
    },
}
</script>