<template>
    <div :class="$style.UserInput">
        <input
            :class="$style.input"
            v-model="value"
            type="text"
            placeholder="Ввести нового"
            @keypress.enter="onEnter"
        >

        <TheButton
            :class="$style.button"
            icon="plus"
            @click.native="onEnter"
        />
    </div>
</template>

<script>
    import TheButton from '../common/TheButton';

    export default {
        name: 'UserInput',

        components: {
            TheButton
        },

        data() {
            return {
                value: ''
            };
        },

        computed: {
            isValid() {
                return !!this.value;
            }
        },

        methods: {
            onEnter() {
                // делаем простейшую валидацию
                // и запускаем событие @enter с введеной строкой

                if (this.isValid) {
                    this.$emit('enter', this.value);
                }
            },
        }
    };
</script>

<style lang="scss" module>
    .UserInput {
        display: flex;
        align-items: center;
    }

    .input {
        flex: 1 1 auto;
        height: 3rem;
        min-width: 0;
        padding: 0.5rem;
        font-size: 1rem;
        border: 0;
        background-color: #f4f4f4;
        transition: border-color 0.15s ease-in-out;

        &:active, &:focus {
            outline: 0;
        }

        &::placeholder {
            color: #b4b4b4;
            opacity: 1;
        }
    }

    .button {
        flex: 0 0 auto;
    }
</style>