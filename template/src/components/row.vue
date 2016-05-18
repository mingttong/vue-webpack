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

    .row > input:first-child + .clear {
        display: block;
    }

    .row > :first-child + input {
        flex: 1;
    }
</style>

<style rel="stylesheet/scss"
       lang="scss"
       scoped>
    @import '../scss/fragment';

    .row {
        width: 100%;
        padding: 10px;
        position: relative;
        min-height: 50px;
    }

    .row:first-child,
    .tip + .row {
        &::before {
            @include row-border
        }
    }

    .row {
        &::before {
            top: 0;
        }
        &::after {
            @include row-border
        }
        .tip & {
            padding: 0;
            background-color: transparent;
            min-height: inherit;
            &::before,
            &::after {
                content: none;
            }
        }
    }

    .clear {
        height: 50px;
        width: 40px;
        position: absolute;
        right: 0;
        top: 0;
        background: url("../assets/clear.svg") no-repeat center;
        background-size: 20px;
        display: none;
    }
</style>
