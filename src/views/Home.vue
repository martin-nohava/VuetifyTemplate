<template>
    <v-layout row justify-space-between>
        <v-flex xs12 sm5 md2 class="mx-3 mt-7">
          <v-sheet
              rounded="lg"
              :elevation="6"    
            >         
                <!-- LEFT -->
              <WellcomePanel></WellcomePanel>
            </v-sheet>
        </v-flex>
        <v-flex xs12 sm6 md7 class="mx-3 mt-7">
          <v-sheet
              rounded="lg"
              min-height="420"
              :elevation="6"
            >
               <!-- MAIN -->
               <MainPanel></MainPanel>
            </v-sheet>
        </v-flex>
        <v-flex xs12 md2 class="mx-3 mt-7">
          <v-layout column>
            <v-flex>
              <v-sheet
              rounded="lg"
              :elevation="6"
            >
              <!-- RIGHT UP -->
              <CustomizationPanel></CustomizationPanel>
            </v-sheet>
            </v-flex>
            <v-flex class="mt-7">
              <v-sheet
              rounded="lg"
              min-height="200"
              :elevation="6"
            >
              <!-- RIGHT DOWN -->
              <HelpPanel></HelpPanel>
            </v-sheet>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
</template>

<script>
    import WellcomePanel from '../components/WellcomePanel';
    import HelpPanel from '../components/HelpPanel';
    import MainPanel from '../components/MainPanel';
    import CustomizationPanel from '../components/CustomizationPanel'

    export default {
        components: {
            WellcomePanel,
            HelpPanel,
            MainPanel,
            CustomizationPanel
        }
    }
</script>