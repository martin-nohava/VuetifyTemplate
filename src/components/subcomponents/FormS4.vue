<template>
<validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
    <!-- WORK POSITION -->
    <v-container fluid>
    <v-row v-if="workPosition">
      <v-col
        cols="12"
        md="4">
        <validation-provider
          v-slot="{ errors }"
          name="select"
          rules="required"
        >
          <v-select
            v-model="selectedWorkPosition.data"
            :items="workPositions"
            :error-messages="errors"
            label="Work position"
            data-vv-name="select"
            required
            hint="Pick one"
            persistent-hint
            outlined
          ></v-select>
        </validation-provider>
      </v-col>
    </v-row>
    <!-- SEX -->
    <v-row v-if="sex">
      <v-col
        cols="12"
        md="4">
        <validation-provider
          v-slot="{ errors }"
          name="select"
          rules="required"
        >
          <v-select
            v-model="selectedSex.data"
            :items="sexes"
            :error-messages="errors"
            label="Sex"
            data-vv-name="select"
            required
            hint="Pick one"
            persistent-hint
            outlined
          ></v-select>
        </validation-provider>
      </v-col>
    </v-row>
    <!-- COUNTRY -->
    <v-row v-if="country">
      <v-col
        cols="12"
        md="4">
        <validation-provider
          v-slot="{ errors }"
          name="select"
          rules="required"
        >
          <v-select
            v-model="selectedCountry.data"
            :items="countries"
            :error-messages="errors"
            label="Country"
            data-vv-name="select"
            required
            hint="Pick one"
            persistent-hint
            outlined
          ></v-select>
        </validation-provider>
      </v-col>
    </v-row>
    <!-- DEPARTEMENT -->
    <v-row v-if="departement">
      <v-col
        cols="12"
        md="4">
        <validation-provider
          v-slot="{ errors }"
          name="select"
          rules="required"
        >
          <v-select
            v-model="selectedDepartement.data"
            :items="departements"
            :error-messages="errors"
            label="Departement"
            data-vv-name="select"
            required
            hint="Pick one"
            persistent-hint
            outlined
          ></v-select>
        </validation-provider>
      </v-col>
    </v-row>
    <!-- AGE -->
    <v-row v-if="age">
      <v-col
        cols="12"
        md="4">
        <validation-provider
          v-slot="{ errors }"
          name="Age"
          rules="required|numeric"
        >
          <v-text-field
            v-model="selectedAge.data"
            :error-messages="errors"
            label="Age"
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
            Finish
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
  import { required, numeric } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

    setInteractionMode('eager')

    extend('required', {
      ...required,
      message: '{_field_} can not be empty',
    })

    extend('numeric', {
      ...numeric,
      message: '{_field_} must be a number',
    })

export default {
  components: {
      ValidationProvider,
      ValidationObserver,
    },
    data () {
      return {
        selectedWorkPosition: {type: 'Work position', data: ''},
        workPositions: [
          'CEO',
          'Developer',
          'IT',
          'Accountant',
        ],
        selectedSex: {type: 'Sex', data: ''},
        sexes: [
          'Male',
          'Female',
        ],
        selectedCountry: {type: 'Country', data: ''},
        countries: [
          'Czech Republic',
          'Germany',
          'Poland',
          'Austria',
          'Slovakia',
        ],
        selectedDepartement: {type: 'Departement', data: ''},
        departements: [
          'FEKT',
          'FIT',
          'CESA',
        ],
        selectedAge: {type: 'Age', data: ''},
      }
    },
    methods: {
        isSelected(token) {
            if (this.selectedAdditionalTokens.indexOf(token) > -1) {
                return true
            } else { 
                return false 
            }
        },
        nextStep() {
            this.saveData()
            this.increment()
        },
        saveData() {
            this.isFilled(this.selectedWorkPosition)
            this.isFilled(this.selectedSex)
            this.isFilled(this.selectedCountry)
            this.isFilled(this.selectedDepartement)
            this.isFilled(this.selectedAge)
        },
        isFilled(token) {
            if(token.data !== '') {
            this.$store.dispatch('setTokensData', token)
            }
        },
        increment() {
            this.$store.dispatch('incrementStep')
        },
        submit () {
        this.$refs.observer.validate()
        },
        clear () {
          this.selectedWorkPosition.data = ''
          this.selectedSex.data = ''
          this.selectedCountry.data = ''
          this.selectedDepartement.data = ''
          this.selectedAge.data = ''
          this.$refs.observer.reset()
        },
    },
    computed: {
        selectedAdditionalTokens: function() {
            return this.$store.getters.getSelectedTokens
        },
        workPosition: function() {
            return this.isSelected('Work position')
        },
        sex: function() {
            return this.isSelected('Sex')
        },
        country: function() {
            return this.isSelected('Country')
        },
        departement: function() {
            return this.isSelected('Departement')
        },
        age: function() {
            return this.isSelected('Age')
        },
    }
}
</script>