<template>
    <main :class="$style.main">
        <TheHeader />

        <nuxt />

        <TheSprite />
    </main>
</template>

<script>
    import {mapGetters} from 'vuex';

    import TheButton from '../components/common/TheButton';
    import TheHeader from '../components/layout/TheHeader';
    import TheSprite from '../components/layout/TheSprite';

    export default {
        components: {
            TheHeader,
            TheSprite,
            TheButton
        },

        computed: {
            ...mapGetters('users', {
                activeUser: 'getActiveUser',
            }),
        }
    };
</script>

<style lang="scss" module>
    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    .main {
        display: flex;
        flex-flow: column;
        height: 100vh;
    }
</style>

