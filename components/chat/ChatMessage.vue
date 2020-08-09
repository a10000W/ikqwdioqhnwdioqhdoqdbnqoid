<template>
    <div :class="[$style.ChatMessage, {[$style._right]: right}]">
        <TheAvatar
            :class="$style.avatar"
            :color="message.user.color"
            :user="message.user.name"
        />

        <div :class="$style.content">
            <p :class="$style.text">
                {{ message.text }}
            </p>

            <span :class="$style.date">
                {{ formattedDate }}
            </span>
        </div>
    </div>
</template>

<script>
    import { formatRelative, subDays } from 'date-fns';
    import { ru } from 'date-fns/locale';

    import TheAvatar from '../common/TheAvatar';

    export default {
        name: 'ChatMessage',

        components: {
            TheAvatar
        },

        props: {
            message: {
                type: Object,
                default: () => {}
            },

            right: Boolean,

            timestamp: Number
        },

        computed: {
            formattedDate() {
                if (this.timestamp && this.message?.timestamp) {
                    if (this.timestamp - this.message?.timestamp < 5000) {
                        // если не прошло 5 секунд возвращаем строку
                        return 'сейчас';
                    }

                    // форматируем дату с помощью date-fns
                    return formatRelative(
                        this.message.timestamp,
                        this.timestamp,
                        {
                            locale: ru,
                            weekStartsOn: 1
                        });
                }

                // фолбэк
                return 'неизвестно';
            }
        }
    };
</script>

<style lang="scss" module>
    .ChatMessage {
        display: flex;
        align-items: flex-end;
        padding: 1rem;

        &._right {
            flex-flow: row-reverse;

            .avatar {
                margin-right: 0;
                margin-left: 0.5rem;
            }

            .content {
                border-radius: 1rem 1rem 0 1rem;

                &:before {
                    left: auto;
                    right: -0.75rem;
                    bottom: 0;
                    border-left: 0.5rem solid #8ad597;
                    border-right: 0.5rem solid transparent;
                    border-top: 0.5rem solid transparent;
                    border-bottom: 0.5rem solid #8ad597;
                }
            }
        }
    }

    .avatar {
        flex: 0 0 auto;
        margin-right: 0.5rem;
    }

    .content {
        position: relative;
        flex: 0 1 auto;
        min-width: 40vw;
        max-width: 60vw;
        padding: 1rem 0.75rem;
        background-color: #8ad597;
        border-radius: 1rem 1rem 1rem 0;

        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: -0.75rem;
            bottom: 0;
            border-left: 0.5rem solid transparent;
            border-right: 0.5rem solid #8ad597;
            border-top: 0.5rem solid transparent;
            border-bottom: 0.5rem solid #8ad597;
        }
    }

    .text {
        margin: 0 0 0.5rem;
        word-wrap: break-word;
    }

    .date {
        display: inline-block;
        width: 100%;
        font-size: 0.75rem;
        text-align: right;
        font-style: italic;
    }
</style>