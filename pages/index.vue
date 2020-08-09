<template>
    <section :class="$style.Index">
        <UserInput @enter="onCreateUser" />

        <UserList
            :class="$style.users"
            :users="users"
            @select="onSelectUser"
        />

        <TheButton v-if="users.length"
                   wide
                   @click.native="deleteAll">
            Удалить историю
        </TheButton>
    </section>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    import UserInput from '../components/users/UserInput';
    import UserList from '../components/users/UserList';
    import TheButton from '../components/common/TheButton';

    export default {
        components: {
            UserInput,
            UserList,
            TheButton
        },

        computed: {
            ...mapState('users', ['users']),
        },

        methods: {
            ...mapActions('users', [
                'createUser',
                'setActiveUser',
                'removeAllUsers'
            ]),

            ...mapActions('messages', [
                'removeAllMessages'
            ]),

            async onCreateUser(name) {
                // по нажатию на (+) или Enter
                // создаем пользователя в vuex
                // ждем promise и возвращаем id нового пользователя
                // после назначаем его активным
                // и наконец уходим в чат

                this.$router.push('chat');
                const created = await this.createUser(name);
                await this.setActiveUser(created.id);
            },

            async onSelectUser(id) {
                // по клику на элемент списка юзеров
                // назначаем в vuex активного юзера по его id
                // и уходим в чат

                await this.setActiveUser(id);
                this.$router.push('chat');
            },

            async deleteAll() {
                await this.removeAllMessages();
                await this.removeAllUsers();
            }
        }
    };
</script>

<style lang="scss" module>
    .Index {
        display: flex;
        flex-flow: column;
        flex: 1 1 0;
    }

    .users {
        flex: 1 1 0;
        overflow-y: auto;
    }
</style>