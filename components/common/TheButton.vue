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
            wide: Boolean,
            disabled: Boolean,
            icon: String,
        },

        computed: {
            css() {
                return {
                    [this.$style._round]: this.round,
                    [this.$style._disabled]: this.disabled,
                    [this.$style._wide]: this.wide,
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
        min-width: 3rem;
        min-height: 3rem;
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

        &._wide {
            width: 100%;
        }
    }

    .icon {
        width: 1.5rem;
        height: 1.5rem;
        fill: white;
    }
</style>