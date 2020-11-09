<template>


  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            md="4">
            
            <validation-provider
              v-slot="{ errors }"
              name="select"
              rules="required"
            >
              <v-select
                v-model="select"
                :items="items"
                :error-messages="errors"
                label="Select"
                data-vv-name="select"
                required
                multiple
                hint="Pick one or more"
                persistent-hint
                outlined
              ></v-select>
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
    data () {
      return {
        select: [],
        items: [
          'Work position',
          'Country',
          'Sex',
          'Age',
          'Departement',
        ],
      }
    },
    methods: {
        nextStep() {
            this.saveData()
            this.increment()
        },
        saveData() {          
            this.$store.dispatch('setSelectedTokens', this.select)
        },
        increment() {
            this.$store.dispatch('incrementStep')
        },
        submit () {
        this.$refs.observer.validate()
        },
        clear () {
          this.select = []
          this.$refs.observer.reset()
        },
    },
}
</script>