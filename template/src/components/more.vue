<template>
    <div>
        <span class="dot-1"></span>
        <span class="dot-2"></span>
        <span></span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/colorList';

    @keyframes bounce {
        0%, 80%, to {
            transform: scale(0)
        }

        40% {
            transform: scale(1)
        }
    }

    div {
        text-align: center;
        margin: 10px 0;
    }

    span {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin: 0 3px;
        background-color: $BORDER_COLOR;
        border-radius: 100%;
        animation: bounce 1.6s infinite ease-in-out;
        animation-fill-mode: both;
    }

    .dot {
        &-1 {
            animation-delay: -.32s
        }
        &-2 {
            animation-delay: -.16s
        }
    }
</style>
