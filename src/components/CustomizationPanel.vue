<template>
    <div class="pa-6">
        <p
        class="text-h5 text-justify"
        >
        Customization
        </p>
        <v-switch 
        v-model="$vuetify.theme.dark"
        :label="`Turn dark mode ${ status }`"
        @click="changeDarkmodeStatus"
        >
        </v-switch>
        </div>
</template>

<script>
export default {

    methods: {
      changeDarkmodeStatus() {
        this.$store.dispatch('setDarkmode')
      }
    },
    computed: {
      status: function() {
        if(this.$store.getters.getDarkmodeStatus == false) {
          return 'on'
        }
        else {
          return 'off'
        }
      }
    }
}
</script>