<template>
    <section :class="$style.Chat">
        <ChatMessages
            v-if="messages.length"
            :class="$style.messages"
            :messages="messages"
        />

        <div v-else
             :class="$style.empty">
            <span v-if="!activeUser">
                Пользователь не выбран
            </span>

            <span v-else>
                Пока сообщений нет
            </span>
        </div>

        <ChatInput
            :class="$style.input"
            :disabled="!activeUser"
            @send="handleSend"
        />
    </section>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex';
    import ChatInput from '../../components/chat/ChatInput';
    import ChatMessage from '../../components/chat/ChatMessage';
    import ChatMessages from '../../components/chat/ChatMessages';

    export default {
        components: {
            ChatInput,
            ChatMessage,
            ChatMessages
        },

        computed: {
            ...mapState('messages', ['messages']),

            ...mapGetters('users', {
                activeUser: 'getActiveUser'
            }),
        },

        async asyncData({ store, redirect }) {
            // пересылаем пользователя на экран выбора юзера
            // если юзер не выбран
            if (store.state.users.activeId === null) {
                redirect('/');
            }

            return {};
        },

        methods: {
            ...mapActions('messages', ['createMessage']),
            handleSend(text) {
                this.createMessage({
                    text: text,
                    user: this.activeUser
                });
            }
        }
    };
</script>

<style lang="scss" module>
    .Chat {
        display: flex;
        flex-flow: column;
        flex: 1 1 0;
    }

    .messages {
        flex: 1 1 0;
        overflow-y: auto;
    }

    .input {
        flex: 0 0 auto;
    }

    .empty {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 0;
        color: #cdcdcd;
    }
</style>