<template>
    <!-- WORK POSITION -->
    <v-container fluid>
    <v-row v-if="workPosition">
      <v-col cols="12" md="4">
        <v-select
          v-model="selectedWorkPosition.data"
          :items="workPositions"
          label="Work position"
          hint="Pick one"
          persistent-hint
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <!-- SEX -->
    <v-row v-if="sex">
      <v-col cols="12" md="4">
        <v-select
          v-model="selectedSex.data"
          :items="sexes"
          label="Sex"
          hint="Pick one"
          persistent-hint
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <!-- COUNTRY -->
    <v-row v-if="country">
      <v-col cols="12" md="4">
        <v-select
          v-model="selectedCountry.data"
          :items="countries"
          label="Country"
          hint="Pick one"
          persistent-hint
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <!-- DEPARTEMENT -->
    <v-row v-if="departement">
      <v-col cols="12" md="4">
        <v-select
          v-model="selectedDepartement.data"
          :items="departements"
          label="Departement"
          hint="Pick one"
          persistent-hint
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <!-- AGE -->
    <v-row v-if="age">
      <v-col cols="12" md="4">
        <v-text-field
        v-model="selectedAge.data"
        label="Outlined"
        placeholder="Age"
        outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
        <v-btn
          color="primary"
          @click="nextStep"
        >
          Finish
        </v-btn>
         <v-btn text>
            Cancel
          </v-btn>
      </v-row>
  </v-container>
</template>

<script>
export default {
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
        }
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