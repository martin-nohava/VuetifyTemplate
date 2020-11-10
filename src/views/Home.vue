<template>
    <v-container fluid class="pa-0">
        <v-row no-gutters justify="space-between">
            <v-col lg="3" class=" mt-7 d-none d-lg-block">
            <v-sheet
                rounded="lg"
                :elevation="6"
                :class="[showAnimation ? 'animate__animated animate__fadeInUp' : '']"    
                >         
                    <!-- LEFT ON lg-->
                <WellcomePanel></WellcomePanel>
                </v-sheet>
            </v-col>
            <v-col md="12" cols="12" class=" mt-7 d-lg-none">
            <v-sheet
                rounded="lg"
                :elevation="6"
                :class="[showAnimation ? 'animate__animated animate__fadeInUp' : '']"    
                >         
                    <!-- LEFT ON sm, md -->
                <WellcomePanel></WellcomePanel>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="12" md="7" lg="6" class=" mt-7">
            <v-sheet
                rounded="lg"
                min-height="420"
                :elevation="6"
                :class="[showAnimation ? 'animate__animated animate__fadeInUp ' : '']"
                >
                <!-- MAIN -->
                <MainPanel></MainPanel>
                </v-sheet>
            </v-col>
            <v-col sm="12" md="4" lg="2" class=" mt-7">
                <v-row no-gutters>
                    <v-col>
                        <v-sheet
                        rounded="lg"
                        :elevation="6"
                        :class="[showAnimation ? 'animate__animated animate__fadeInUp' : '']"
                        >
                        <!-- RIGHT UP -->
                        <CustomizationPanel></CustomizationPanel>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="mt-7">
                        <v-sheet
                        rounded="lg"
                        min-height="200"
                        :elevation="6"
                        :class="[showAnimation ? 'animate__animated animate__fadeInUp' : '']"
                        >
                        <!-- RIGHT DOWN -->
                        <HelpPanel></HelpPanel>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
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
        },
        data: () => ({
            name: 'Home',
            showAnimation: true,
        }),
        methods: {
            setVisited() {
                if(!this.$store.getters.getHomePageVisited) {
                    this.showAnimation = true
                }
                else {
                    this.showAnimation = false
                }
                this.$store.dispatch('setPageVisited', this.name)
            }
        },
        mounted() {
            this.setVisited()
        }
    }
</script>