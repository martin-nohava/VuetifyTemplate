<template>
  <v-app id="inspire">
    <v-app-bar
      app
      rounded="lg"
      class="ma-sm-7"
      :elevation="6"
      :style="[$vuetify.theme.dark ? null : {'background-color': '#fff'}]"
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

    <v-main 
    class="pt-custom"
    :style="[$vuetify.theme.dark ? null : {'background-color': '#F5F5F5'}]"
    >

    <div class="mx-7">
      <v-layout row justify-space-between>
        <v-flex xs12 sm5 md2 class="mx-3 mt-7">
          <v-sheet
              rounded="lg"
              min-height="420"
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
              min-height="200"
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
    </div>
    
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Kvacker</strong>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>

import WellcomePanel from './components/WellcomePanel';
import HelpPanel from './components/HelpPanel';
import MainPanel from './components/MainPanel';
import CustomizationPanel from './components/CustomizationPanel'

  export default {
    
    components: {
      WellcomePanel,
      HelpPanel,
      MainPanel,
      CustomizationPanel
    },

    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      status: 'on',
    }),
  }
</script>

<style scoped>

@media screen and (min-width: 600px) {
  .pt-custom {
    padding-top: 94px !important;
  }
}

</style>
