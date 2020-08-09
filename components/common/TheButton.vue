<template>
    <button :class="[$style.TheButton, css]"
            :disabled="disabled">
        <slot>
            <svg v-if="icon" :class="$style.icon">
                <use :xlink:href="`#ic-${icon}`" />
            </svg>
        </slot>
    </button>
</template>

<script>
    export default {
        name: 'TheButton',

        props: {
            round: Boolean,
            disabled: Boolean,
            icon: String,
        },

        computed: {
            css() {
                return {
                    [this.$style._round]: this.round,
                    [this.$style._disabled]: this.disabled
                };
            }
        }
    };
</script>

<style lang="scss" module>
    .TheButton {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        margin: 0;
        padding: 0;
        color: white;
        border: 0;
        background-color: #41B883;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;

        &:hover {
            background-color: #409b67;
        }

        &:active, &:focus {
            outline: 0;
            background-color: #2c9b56;
        }

        &._round {
            border-radius: 50%;
        }

        &._disabled {
            opacity: 0.5;
        }
    }

    .icon {
        width: 50%;
        height: 50%;
        fill: white;
    }
</style>