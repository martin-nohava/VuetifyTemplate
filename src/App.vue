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

    <v-snackbar
    v-model="showBackOnline"
    color="success black--text"
    >
        {{ textOn }}
    </v-snackbar>
    <v-snackbar
    v-model="offLine"
    color="error"
    >
        {{ textOff }}
    </v-snackbar>

  </v-app>
</template>

<script>
import AppBar from './components/AppBar'

  export default {
    components: {
      AppBar
    },
    data: () => ({
        onLine: navigator.onLine,
        showBackOnline: false,
        textOn: 'You are back online!',
        textOff: 'Application is offline!'
    }),
    computed: {
      offLine() {
            return !this.onLine
        }
    },
    methods: {
        updateOnlineStatus(e) {
            const { type } = e;
            this.onLine = type === 'online';
        }
    },
    watch: {
        onLine(v) {
            if(v) {
            this.showBackOnline = true;
            setTimeout(()=>{ this.showBackOnline = false; }, 5000);
        }
        }
    },
    mounted() {
        window.addEventListener('online',  this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);
    },
    beforeDestroy() {
        window.removeEventListener('online',  this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
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
