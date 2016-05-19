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

<style rel="stylesheet/scss"
       lang="scss">
    .row {
        > :first-child + input {
            flex: 1;
        }
        > input:first-child {
            text-align: left;
            flex: 1;
        }
        .android & > input:focus {
            margin-right: 25px;
        }
    }

    .android .row > input,
    .ios .row > input:first-child {
        &:focus + .clear{
            opacity: 1;
            z-index: 1;
        }
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
        &::before {
            @extend %row-border;
            top: 0;
        }
        &::after {
            @extend %row-border;
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
        ~ .row::before {
            content: none;
        }
    }

    .clear {
        height: 50px;
        width: 40px;
        position: absolute;
        right: 0;
        top: 0;
        background: url("../assets/clear.svg") no-repeat center {
            size: 20px;
        };
        opacity: 0;
        z-index: -1;
        transition: .1s;
    }
</style>
