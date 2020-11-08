<template>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
            outlined
          ></v-text-field>
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
    </v-form>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {

      nextStep() {
        this.saveData()
        this.increment()
      },
      saveData() {
        this.$store.dispatch('setName', { firstName: this.firstname, lastName: this.lastname })
        
      },
      increment() {
        this.$store.dispatch('incrementStep')
      }
    },
    
}
</script>