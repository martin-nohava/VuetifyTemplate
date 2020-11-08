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
          'Degree'
        ],
      }
    },
    watch: {
        select() {
            
        }
    }
}
</script>