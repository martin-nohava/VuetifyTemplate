<template>
    <div class="pa-6">
        <p
        class="text-h5 text-justify-left font-weight-medium"
        >
        Please enter your credentials
        </p>
        <!-- STEPPER FOR BIGGER SCREENS -->
        <v-stepper
            v-model="stepNumber"
            vertical
            class="hidden-sm-and-down"
        >
            <v-stepper-step
            :complete="stepNumber > 1"
            step="1"
            >
            Tell us who you are
            <small>Insert your first and last name</small>
            </v-stepper-step>

            <v-stepper-content step="1">
            <FormS1></FormS1>
            </v-stepper-content>

            <v-stepper-step
            :complete="stepNumber > 2"
            step="2"
            >
            How can we get in touch
            <small>Email will do</small>
            </v-stepper-step>

            <v-stepper-content step="2">
                <FormS2></FormS2>
            </v-stepper-content>

            <v-stepper-step
            :complete="stepNumber > 3"
            step="3"
            >
            Chose additional tokens
            <small>They will be used for authentication</small>
            </v-stepper-step>

            <v-stepper-content step="3">
            <FormS3></FormS3>
            </v-stepper-content>

            <v-stepper-step
            :complete="stepNumber > 4"
            step="4"
            >
            Fill information
            <small>Set token's values</small>
            </v-stepper-step>

            <v-stepper-content step="4">
            <FormS4></FormS4>
            </v-stepper-content>

        </v-stepper>

        <!-- STEPPER FOR SMALLER SCREENS -->

        <v-stepper 
        v-model="stepNumber"
        class="hidden-md-and-up">
            <v-stepper-header>
            <v-stepper-step
                :complete="stepNumber > 1"
                step="1"
            >
                Tell us who you are
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
                :complete="stepNumber > 2"
                step="2"
            >
                How can we get in touch
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step 
                :complete="stepNumber > 3"
                step="3"
            >
                Chose additional tokens
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step 
                :complete="stepNumber > 4"
                step="4"
            >
                Fill information
            </v-stepper-step>

            </v-stepper-header>

            <v-stepper-items>
            <v-stepper-content step="1">
                <FormS1></FormS1>
            </v-stepper-content>

            <v-stepper-content step="2">
                <FormS2></FormS2>
            </v-stepper-content>

            <v-stepper-content step="3">
                <FormS3></FormS3>
            </v-stepper-content>

            <v-stepper-content step="4">
                <FormS4></FormS4>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
import FormS1 from './subcomponents/FormS1'
import FormS2 from './subcomponents/FormS2'
import FormS3 from './subcomponents/FormS3'
import FormS4 from './subcomponents/FormS4'

export default {

    components: {
        FormS1,
        FormS2,
        FormS3,
        FormS4
    },

    data() {
        return {
            e1: 1,
            
        } 
    },
    computed: {
        stepNumber: function() {
          return this.$store.getters.getStep
        }
    }
}
</script>