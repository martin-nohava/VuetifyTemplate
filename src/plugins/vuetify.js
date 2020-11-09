import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

import cs from 'vuetify/es5/locale/cs';
import en from 'vuetify/es5/locale/en';

Vue.component('my-component', {
    methods: {
      changeLocale () {
        this.$vuetify.lang.current = 'cs';
      },
    },
});

export default new Vuetify({
    lang: {
        locales: { cs, en },
        current: 'cs',
      },
      theme: {
        themes: {
          light: {
            primary: colors.green,
            secondary: colors.deepOrange,
            accent: colors.shades.black,
            error: colors.red.accent3,
            success: colors.green.accent3,
          },
          dark: {
            primary: colors.green.accent3,
            secondary: colors.deepOrange.accent3,
            accent: colors.shades.black,
            error: colors.red.accent3,
            success: colors.green.accent3,
          },
        },
      },
      icons: {
        iconfont: 'mdi',
      },
});
