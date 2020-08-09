<template>
    <header :class="$style.TheHeader">
        <template v-if="$route.name === 'index'">
            <h1 :class="$style.title">
                Выберите пользователя
            </h1>
        </template>

        <template v-if="$route.name === 'chat'">
            <TheButton :class="$style.back"
                       round
                       icon="arrow-left"
                       @click.native="$router.go(-1)">
            </TheButton>

            <template v-if="activeUser">
                <TheAvatar
                    :class="$style.avatar"
                    :color="activeUser.color"
                    :user="activeUser.name"
                />

                <h1 :class="$style.title">
                    {{ activeUser.name }}
                </h1>
            </template>
        </template>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex';

    import TheButton from '../common/TheButton';
    import TheAvatar from '../common/TheAvatar';

    export default {
        name: 'TheHeader',

        components: {
            TheButton,
            TheAvatar
        },

        computed: {
            ...mapGetters('users', {
                activeUser: 'getActiveUser'
            })
        }
    };
</script>

<style lang="scss" module>
    .TheHeader {
        display: flex;
        align-items: center;
        min-height: 4rem;
        background-color: #41B883;
        padding: 0.5rem;
    }

    .back {
        margin-right: 0.5rem;
    }

    .avatar {
        margin-right: 0.5rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        margin: 0;
    }
</style>