<template>
    <div class="mt-7">
        <v-sheet elevation="6" rounded="lg">
        <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Name
            </th>
            <th class="text-left">
                Data
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Name</td>
            <td>{{ name }}</td>
            </tr>
            <tr>
            <td>Email</td>
            <td>{{ email }}</td>
            </tr>
            <tr>
            <td>Selected tokens</td>
            <td>{{ tokens }}</td>
            </tr>
            <tr>
            <td>Tokens data</td>
            <td>{{ tokensData }}</td>
            </tr>
            <tr>
            <td>Darkmode status</td>
            <td>{{ darkmode }}</td>
            </tr>
            <tr>
            <td>Online</td>
            <td>{{ onLine }} | Show back online: {{ showBackOnline }}</td>
            </tr>
            <tr>
            <td>Height</td>
            <td>{{ hgh }} </td>
            </tr>
        </tbody>
        </template>
        </v-simple-table>
        </v-sheet>
        
            
        
    </div>
</template>

<script>

export default {

    data: () => ({
        onLine: navigator.onLine,
        showBackOnline: false,
    }),
    computed: {
        name() {
            return this.$store.getters.getUserName
        },
        step() {
            return this.$store.getters.getStep
        },
        email() {
            return this.$store.getters.getEmail
        },
        tokens() {
            return this.$store.getters.getSelectedTokens
        },
        tokensData() {
            return this.$store.getters.getTokensData
        },
        darkmode() {
            return this.$store.getters.getDarkmodeStatus
        },
        offLine() {
            return !this.onLine
        },
        hgh() {
            return this.$vuetify.breakpoint.height
        }
    },
    // vv WATCHING CONNECTION STATUS vv (duplicated original in App.vue)//
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