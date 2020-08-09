<template>
    <div ref="element"
        :class="$style.ChatMessages">
        <ChatMessage
            v-for="msg in messages"
            :key="msg.id"
            :message="msg"
            :right="msg.user.id === activeUser.id"
            :timestamp="timestamp">
        </ChatMessage>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    import ChatMessage from './ChatMessage';

    export default {
        name: 'ChatMessages',

        components: {
            ChatMessage
        },

        props: {
            messages: {
                type: Array,
                default: () => [],
            }
        },

        data() {
            return {
                timestamp: +new Date
            };
        },

        computed: {
            ...mapGetters('users', {
                activeUser: 'getActiveUser'
            })
        },

        watch: {
            messages() {
                // при изменении массива сообщений
                // скроллим чат вниз
                this.scrollToBottom();
            }
        },

        mounted() {
            this.scrollToBottom();
            this.startTimer();
        },

        destroyed() {
            clearInterval(this.interval);
        },

        methods: {
            scrollToBottom() {
                this.$nextTick(() => {
                    const div = this.$refs.element;
                    div.scrollTop = div.scrollHeight;
                });
            },

            startTimer() {
                this.interval = setInterval(this.updateTimer, 1000);
            },

            updateTimer() {
                this.timestamp = +new Date;
            }
        }
    };
</script>

<style lang="scss" module>
    .ChatMessages {
        display: flex;
        flex-flow: column;
        margin: 0;
        padding: 0;
    }
</style>