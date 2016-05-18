<template>
    <div id="backdrop"
         v-show="backdropShow"
         transition="fade"
         @touchmove.stop.prevent="touchmove()"></div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [
            'backdropShow'
        ],
        methods: {
            touchmove () {}
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/colorList';

    #backdrop {
        background: $BACKDROP_COLOR;
        z-index: 3;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .fade-transition {
        transition: .3s ease-out;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
</style>
