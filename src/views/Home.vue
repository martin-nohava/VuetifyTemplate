<template>
    <v-layout row justify-space-between>
        <v-flex lg3 class="mx-3 mt-7 d-none d-lg-block">
          <v-sheet
              rounded="lg"
              :elevation="6"    
            >         
                <!-- LEFT ON lg-->
              <WellcomePanel></WellcomePanel>
            </v-sheet>
        </v-flex>
        <v-flex md12 class="mx-3 mt-7 d-lg-none">
          <v-sheet
              rounded="lg"
              :elevation="6"    
            >         
                <!-- LEFT ON sm, md -->
              <WellcomePanel></WellcomePanel>
            </v-sheet>
        </v-flex>
        <v-flex sm12 md7 lg6 class="mx-3 mt-7">
          <v-sheet
              rounded="lg"
              min-height="420"
              :elevation="6"
            >
               <!-- MAIN -->
               <MainPanel></MainPanel>
            </v-sheet>
        </v-flex>
        <v-flex sm12 md4 lg2 class="mx-3 mt-7">
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