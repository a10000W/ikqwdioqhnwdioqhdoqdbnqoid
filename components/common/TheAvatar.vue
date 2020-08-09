<template>
    <div :class="$style.TheAvatar"
         :style="{backgroundColor: color}"
         :title="user ? user : null">

        <div v-if="letter"
             :class="$style.letter">
            {{ letter }}
        </div>

        <svg v-else
             :class="$style.icon">
            <use xlink:href="#ic-user"></use>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'TheAvatar',

        props: {
            user: {
                type: String,
                default: ''
            },

            color: {
                type: String,
                default: '#41B883'
            }
        },

        computed: {
            letter() {
                return this.user ? this.user[0].toUpperCase() : null;
            }
        }
    };
</script>

<style lang="scss" module>
    .TheAvatar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }

    .letter {
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 1;
        color: white;
    }

    .icon {
        width: 75%;
        height: 75%;
        fill: white;
    }
</style>