<template>
    <div :class="$style.ChatInput">
        <input :class="$style.input"
               v-model="value"
               :disabled="disabled"
               type="text"
               placeholder="Сообщение"
               @keypress.enter="onSend">

        <TheButton
            :class="$style.button"
            :disabled="disabled"
            icon="send"
            @click.native="onSend"
        />
    </div>
</template>

<script>
    import TheButton from '../common/TheButton';
    export default {
        name: 'InputField',

        components: {
            TheButton,
        },

        props: {
            disabled: Boolean
        },

        data() {
            return {
                value: '',
            };
        },

        computed: {
            isValid() {
                return !!this.value;
            }
        },

        methods: {
            onSend() {
                // после нажатия на enter или бумажный самолёт
                // проверяем сообщение на валидность
                // и запускаем событие
                if (this.isValid) {
                    this.$emit('send', this.value);
                }

                this.value = '';
            }
        }
    };
</script>

<style lang="scss" module>
    .ChatInput {
        display: flex;
        width: 100%;
    }

    .input {
        flex: 1 1 auto;
        min-width: 0;
        height: 3rem;
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