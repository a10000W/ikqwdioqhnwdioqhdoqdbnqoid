<template>
    <li :class="$style.UserItem">
        <TheAvatar
            :class="$style.avatar"
            :color="user.color"
            :user="user.name"
        />

        <span :class="$style.name">
            {{ user.name }}
        </span>
    </li>
</template>

<script>
    import TheAvatar from '../common/TheAvatar';
    export default {
        name: 'UserItem',

        components: {
            TheAvatar
        },

        props: {
            user: Object
        }
    };
</script>

<style lang="scss" module>
    .UserItem {
        display: flex;
        align-items: center;
        height: 4rem;
        padding: 1rem;
        background-color: #f0f0f0;
        border-top: 1px solid #ccc;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;

        &:hover {
            background-color: #e6e6e6;
        }

        &:active {
            background-color: #dcdcdc;
        }
    }

    .avatar {
        margin-right: 0.5rem;
    }

    .name {
        font-size: 1.2rem;
    }
</style>