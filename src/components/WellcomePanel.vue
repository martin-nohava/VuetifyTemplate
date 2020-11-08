<template>
    <div class="pa-6">
        <p
        class="text-h4 text-justify"
        >
        Wellcome! {{ name }} {{step}} {{ email }} {{tokens}}
        </p>
        <p
        class="text-body-2 text-justify"
        >
        Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
        </p>
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
            return this.$store.getters.getTokens
        }
    }
}
</script>