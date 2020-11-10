<template>
    <v-container>
        <v-row>
            <v-col lg="3" class="mx-3 mt-7 d-none d-lg-block">
            <v-sheet
                rounded="lg"
                :elevation="6"    
                >         
                    <!-- LEFT ON lg-->
                <WellcomePanel></WellcomePanel>
                </v-sheet>
            </v-col>
            <v-col md="12" class="mx-3 mt-7 d-lg-none">
            <v-sheet
                rounded="lg"
                :elevation="6"    
                >         
                    <!-- LEFT ON sm, md -->
                <WellcomePanel></WellcomePanel>
                </v-sheet>
            </v-col>
            <v-col sm="12" md="7" lg="6" class="mx-3 mt-7">
            <v-sheet
                rounded="lg"
                min-height="420"
                :elevation="6"
                >
                <!-- MAIN -->
                <MainPanel></MainPanel>
                </v-sheet>
            </v-col>
            <v-col sm="12" md="4" lg="2" class="mx-3 mt-7">
                <v-row>
                    <v-col>
                        <v-sheet
                        rounded="lg"
                        :elevation="6"
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
        }
    }
</script>