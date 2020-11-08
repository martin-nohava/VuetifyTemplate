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
    data() {
        return {
        }
    },
    
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