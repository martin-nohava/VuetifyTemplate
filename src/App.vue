<template>
  <v-app id="inspire">
    <v-app-bar
      app
      rounded="lg"
      class="ma-sm-7"
      :elevation="6"

    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="pt-custom">

    <div class="mx-7">
      <v-layout row justify-space-between>
        <v-flex xs12 sm5 md2 class="mx-3 mt-7">
          <v-sheet
              rounded="lg"
              min-height="420"
              :elevation="4"
            >
              <!-- LEFT -->
              1
            </v-sheet>
        </v-flex>
        <v-flex xs12 sm6 md7 class="mx-3 mt-7">
          <v-sheet
              rounded="lg"
              min-height="420"
              :elevation="4"
            >
              <div class="pa-6">
                <!-- MAIN -->
                <v-stepper
                  v-model="e6"
                  vertical
                >
                  <v-stepper-step
                    :complete="e6 > 1"
                    step="1"
                  >
                    Select an app
                    <small>Summarize if needed</small>
                  </v-stepper-step>

                  <v-stepper-content step="1">
                    <v-card
                      color="grey lighten-1"
                      class="mb-12"
                      height="200px"
                    ></v-card>
                    <v-btn
                      color="primary"
                      @click="e6 = 2"
                    >
                      Continue
                    </v-btn>
                    <v-btn text>
                      Cancel
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-step
                    :complete="e6 > 2"
                    step="2"
                  >
                    Configure analytics for this app
                  </v-stepper-step>

                  <v-stepper-content step="2">
                    <v-card
                      color="grey lighten-1"
                      class="mb-12"
                      height="200px"
                    ></v-card>
                    <v-btn
                      color="primary"
                      @click="e6 = 3"
                    >
                      Continue
                    </v-btn>
                    <v-btn text>
                      Cancel
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-step
                    :complete="e6 > 3"
                    step="3"
                  >
                    Select an ad format and name ad unit
                  </v-stepper-step>

                  <v-stepper-content step="3">
                    <v-card
                      color="grey lighten-1"
                      class="mb-12"
                      height="200px"
                    ></v-card>
                    <v-btn
                      color="primary"
                      @click="e6 = 4"
                    >
                      Continue
                    </v-btn>
                    <v-btn text>
                      Cancel
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-step step="4">
                    View setup instructions
                  </v-stepper-step>
                  <v-stepper-content step="4">
                    <v-card
                      color="grey lighten-1"
                      class="mb-12"
                      height="200px"
                    ></v-card>
                    <v-btn
                      color="primary"
                      @click="e6 = 1"
                    >
                      Continue
                    </v-btn>
                    <v-btn text>
                      Cancel
                    </v-btn>
                  </v-stepper-content>
                </v-stepper>
              </div>
            </v-sheet>
        </v-flex>
        <v-flex xs12 md2 class="mx-3 mt-7">
          <v-layout column>
            <v-flex>
              <v-sheet
              rounded="lg"
              min-height="200"
              :elevation="4"
            >
              <div class="pa-6">
                <!-- RIGHT -->
                3.1
                <v-switch 
                v-model="$vuetify.theme.dark"
                :label="`Turn dark mode ${ status }`"
                @click="changeDarkmodeStatus"
                >

                </v-switch>
              </div>
            </v-sheet>
            </v-flex>
            <v-flex class="mt-7">
              <v-sheet
              rounded="lg"
              min-height="200"
              :elevation="4"
            >
              <!--  -->
              3.2
            </v-sheet>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </div>
    
    </v-main>
  </v-app>
</template>

<script>

  export default {
    
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      status: 'on',
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
      e6: 1,
    }),
    methods: {
      changeDarkmodeStatus() {
        if(this.status == 'on') {
          this.status = 'off'
        }
        else {
          this.status = 'on'
        }
      }
    }
  }
</script>

<style scoped>

@media screen and (min-width: 600px) {
  .pt-custom {
    padding-top: 94px !important;
  }
}

</style>
