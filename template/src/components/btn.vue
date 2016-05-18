<template>
    <button :style="{width:btnWidth}"
            :class="{alert:alert,disabled:!allow,warning:warning,next:next}"
            @click.stop.prevent="btnFunc()">\{{text}}
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
    @import '../scss/colorList';

    button {
        color: $MAIN-TEXT-COLOR;
    }

    button::before {
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        left: -50%;
        top: -50%;
        transform: scale(.5);
        border: 2px solid $MAIN-TEXT-COLOR;
    }

    .disabled,
    .disabled:active {
        background-color: #AAAAAA !important;
        color: #fff !important;
        pointer-events: none;
        cursor: not-allowed;
    }

    .disabled::after,
    .disabled::before,
    .alert::before {
        display: none !important;
    }

    .warning {
        background-color: #fff;
        color: $MINOR-COLOR;
    }

    .warning::before {
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        left: -50%;
        top: -50%;
        transform: scale(.5);
        border: 2px solid $MINOR-COLOR;
    }

    .alert {
        background-color: $MINOR-COLOR;
        color: #fff;
    }

    .next {
        color: #fff;
        background-color: $MAIN-COLOR;
    }

    .next::before {
        display: none;
    }

    :active::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: $ACTIVE-DROP-COLOR;
    }
</style>
