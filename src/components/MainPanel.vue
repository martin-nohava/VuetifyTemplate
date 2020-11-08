<template>
    <div class="pa-6">
        <p
        class="text-h5 text-justify"
        >
        Please enter your credentials
        </p>
        <v-stepper
            v-model="e6"
            vertical
            class="hidden-sm-and-down"
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

        <v-stepper 
        v-model="e1"
        class="hidden-md-and-up">
            <v-stepper-header>
            <v-stepper-step
                :complete="e1 > 1"
                step="1"
            >
                Name of step 1
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="e1 > 2"
                step="2"
            >
                Name of step 2
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
                Name of step 3
            </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
            <v-stepper-content step="1">
                <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
                ></v-card>

                <v-btn
                color="primary"
                @click="e1 = 2"
                >
                Continue
                </v-btn>

                <v-btn text>
                Cancel
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
                ></v-card>

                <v-btn
                color="primary"
                @click="e1 = 3"
                >
                Continue
                </v-btn>

                <v-btn text>
                Cancel
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
                ></v-card>

                <v-btn
                color="primary"
                @click="e1 = 1"
                >
                Continue
                </v-btn>

                <v-btn text>
                Cancel
                </v-btn>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            e6: 1,
            e1: 1,
        }
        
    }
}
</script>