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
            <td>Darkmode status (inverted)</td>
            <td>{{ darkmode }}</td>
            </tr>
        </tbody>
        </template>
        </v-simple-table>
        </v-sheet>
    </div>
</template>

<script>

export default {
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
        }
    }
}
</script>