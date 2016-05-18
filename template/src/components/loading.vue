<template>
    <div>
        <div v-show="show"
             id="loading"
             transition="slide">
            <div></div>
        </div>
        <div v-show="show"
             id="loading-drop"
             @touchmove.stop.prevent="touchmove()"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [
            'show'
        ],
        methods: {
            touchmove () {}
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/colorList';

    #loading {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
    }

    #loading > div {
        background: linear-gradient(to right, $minorColor 35%, $linkColor 50%, $minorColor 65%);
        width: 200%;
        height: 3px;
        animation-name: loading;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        transform: translateX(-100%);
    }

    @keyframes loading {
        0% {
            transform: translateX(-65%);
        }
        100% {
            transform: translateX(15%);
        }
    }

    .slide-transition {
        transition: all .3s;
    }

    .slide-enter, .slide-leave {
        opacity: 0;
        transform: translateY(-100%);
    }

    #loading-drop {
        background: transparent;
        z-index: 3;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>
