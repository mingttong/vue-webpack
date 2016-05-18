<template>
    <label class="row"
           v-show="!hide"
           @click.stop.prevent="stop">
        <slot></slot>
        <div class="clear"
             @click="clear"></div>
    </label>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [
            'link',
            'hide'
        ],
        methods: {
            clear (e) {
                e.target.previousElementSibling.value = ""
                e.target.previousElementSibling.focus()
            },
            stop () {
                this.$router.go(
                    this.link
                )
            }
        }
    }
</script>

<style>
    .row > input:first-child {
        text-align: left;
        flex: 1;
    }

    .android .row > input:focus {
        margin-right: 25px;
    }

    .android .row > input:focus + .clear,
    .ios .row > input:first-child:focus + .clear{
        opacity: 1;
        z-index: 1;
    }

    .row > :first-child + input {
        flex: 1;
    }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/colorList';

    .row {
        width: 100%;
        padding: 10px;
        position: relative;
        min-height: 50px;
    }

    .row:first-child::before,
    .tip + .row::before,
    .row::after {
        content: "";
        width: 100%;
        height: 1px;
        border-bottom: 1px solid $BORDER-COLOR;
        position: absolute;
        bottom: -1px;
        left: 0;
        transform: scaleY(.5);
        transform-origin: 0 0;
        z-index: 1;
    }

    .row::before {
        top: 0;
    }

    .tip .row {
        padding: 0;
        background-color: transparent;
        min-height: inherit;
    }

    .tip .row::before,
    .tip .row::after {
        content: none;
    }

    .clear {
        height: 50px;
        width: 40px;
        position: absolute;
        right: 0;
        top: 0;
        background: url("../assets/clear.svg") no-repeat center;
        background-size: 20px;
        opacity: 0;
        z-index: -1;
        transition: .1s;
    }
</style>
