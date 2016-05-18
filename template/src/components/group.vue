<template>
    <div class="group"
         :class="{single:single,fixed:fixed}">
        <slot name="tip_top"></slot>
        <slot></slot>
        <slot name="tip_bottom"></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [
            'single',
            'fixed'
        ]
    }
</script>

<style rel="stylesheet/scss"
       lang="scss">
    .single .tip {
        &:first-child {
            padding: 0 0 10px;
        }
        &:last-child {
            padding: 10px 0 0;
        }
    }
</style>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
    @import '../scss/fragment';

    .group {
        margin-top: 10px;
        &:last-child {
            margin-bottom: 80px;
        }
    }

    .single {
        padding: 10px;
    }

    .fixed {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        padding: 10px;
        margin-top: 0;
        margin-bottom: 0 !important;
        background-color: white;
        &::before {
            @include row-border;
            top: 0;
        }
    }
</style>
