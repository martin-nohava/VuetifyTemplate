<template>
  <v-app id="inspire">

    <AppBar></AppBar>

    <v-main 
    class="pt-custom"
    :style="[$vuetify.theme.dark ? null : {'background-color': '#F5F5F5'}]"
    >

    <div class="mx-7">
      <router-view/>
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
import AppBar from './components/AppBar'

  export default {
    
    components: {
      AppBar
    },
  }
</script>

<style scoped>

@media screen and (min-width: 600px) {
  .pt-custom {
    padding-top: 94px !important;
  }
}

</style>
