<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :counter="10"
            label="E-mail"
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
            this.$store.dispatch('setEmail', this.email)
        },
        increment() {
            this.$store.dispatch('incrementStep')
        }
    },
}
</script>