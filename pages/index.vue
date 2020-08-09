<template>
    <section>
        <UserInput @enter="onCreateUser" />

        <UserList
            :users="users"
            @select="onSelectUser"
        />
    </section>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    import UserInput from '../components/users/UserInput';
    import UserList from '../components/users/UserList';

    export default {
        components: {
            UserInput,
            UserList
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

            async onCreateUser(name) {
                // по нажатию на (+) или Enter
                // создаем пользователя в vuex
                // ждем promise и возвращаем id нового пользователя
                // после назначаем его активным
                // и наконец уходим в чат

                const created = await this.createUser(name);
                await this.setActiveUser(created.id);
                this.$router.push('chat');
            },

            async onSelectUser(id) {
                // по клику на элемент списка юзеров
                // назначаем в vuex активного юзера по его id
                // и уходим в чат

                await this.setActiveUser(id);
                this.$router.push('chat');
            },
        }
    };
</script>
