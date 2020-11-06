import Vue from 'vue';
import Vuetify from 'vuetify/lib';

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
});
