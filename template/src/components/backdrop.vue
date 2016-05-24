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
    @import '../scss/fragment';

    #backdrop {
        @extend %full-screen;
        background: $BACKDROP_COLOR;
        z-index: 3;
    }
    .fade {
        &-transition {
            transition: .3s ease-out;
        }
        &-enter,
        &-leave {
            opacity: 0;
        }
    }
</style>
