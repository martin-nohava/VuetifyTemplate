<template>
    <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <v-select
          v-model="select"
          :items="items"
          label="Select"
          multiple
          hint="Pick one or more"
          persistent-hint
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
        <v-btn
          color="primary"
          @click="nextStep"
        >
          Continue
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
        }
    },
}
</script>