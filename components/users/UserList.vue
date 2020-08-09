<template>
    <ul :class="$style.UserList">
        <UserItem
            v-for="user in users"
            :key="user.id"
            :user="user"
            @click.native="onClickUser(user)">
        </UserItem>
    </ul>
</template>

<script>
    import UserItem from './UserItem';

    export default {
        name: 'UserList',

        components: {
            UserItem
        },

        props: {
            users: {
                type: Array,
                default: () => []
            }
        },

        methods: {
            onClickUser(user) {
                // по клику на элемент получаем id конкретного юзера
                // и запускаем событие @select

                this.$emit('select', user.id);
            }
        }
    };
</script>

<style lang="scss" module>
    .UserList {
        padding-left: 0;
        margin: 0;
        list-style: none;
    }
</style>