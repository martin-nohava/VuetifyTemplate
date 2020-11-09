<template>
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
        <v-tab @click="goHome()">
          Home
        </v-tab>
        <v-tab @click="goDebug()">
          Debug
        </v-tab>
        <v-tab @click="goAbout()">
          About
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
      
    }),
    methods: {
      goHome() {
        this.$router.push({ name: 'Home' })
      },
      goAbout() {
        this.$router.push({ name: 'About' })
      },
      goDebug() {
        this.$router.push({ name: 'Debug' })
      }
    }
}
</script>

<style scoped>
  .remove-color {
    color: inherit;
  }
</style>