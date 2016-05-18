<template>
    <button :style="{width:btnWidth}"
            :class="{alert:alert,disabled:!allow,warning:warning,next:next}"
            @click.stop.prevent="btnFunc()">/{{text}}
    </button>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            text: {
                default: '确认'
            },
            cut: {
                default: 0
            },
            allow: {
                default: true
            },
            alert: {
                default: false
            },
            warning: {
                default: false
            },
            next: {
                default: false
            },
            btnFn: {
                type: Function,
                default: function () {
                }
            }
        },
        computed: {
            btnWidth () {
                if (!this.cut) {
                    return 100 + "px"
                }
                return (1 / this.cut) * 100 + "%"
            }
        },
        methods: {
            btnFunc () {
                if (this.allow) {
                    this.btnFn()
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/fragment';

    button {
        color: $MAIN_TEXT_COLOR;
        &::before {
            @include btn-border;
            border: 2px solid $MAIN_TEXT_COLOR;
        }
    }

    .disabled {
        &, &:active {
            background-color: #AAAAAA !important;
            color: #fff !important;
            pointer-events: none;
            cursor: not-allowed;
        }
        ::after,
        ::before {
            display: none !important;
        }
    }

    .warning {
        background-color: #fff;
        color: $MINOR_COLOR;
        &::before {
            @include btn-border;
            border: 2px solid $MINOR_COLOR;
        }
    }

    .alert {
        background-color: $MINOR_COLOR;
        color: #fff;
        &::before {
            display: none !important;
        }
    }

    .next {
        color: #fff;
        background-color: $MAIN_COLOR;
        &::before {
            display: none;
        }
    }

    :active::after {
        @include active-drop
    }
</style>
