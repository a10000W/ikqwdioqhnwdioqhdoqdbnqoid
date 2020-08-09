<template>
    <svg style="display: none;"
         xmlns="http://www.w3.org/2000/svg">
        <defs>
            <IcPlus />
            <IcSend />
            <IcUser />
            <IcArrowLeft />
        </defs>
    </svg>
</template>

<script>
    import IcPlus from './icons/IcPlus';
    import IcSend from './icons/IcSend';
    import IcUser from './icons/IcUser';
    import IcArrowLeft from './icons/IcArrowLeft';

    export default {
        name: 'TheSprite',

        components: {
            IcPlus,
            IcSend,
            IcUser,
            IcArrowLeft
        }
    };
</script>