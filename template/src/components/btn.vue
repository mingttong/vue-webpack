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
        vuex: {
            getters: {},
            actions: {}
        },
        data () {
            return {}
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
        },
        events: {},
        created () {
        },
        attached () {
        }
    }
</script>

<style scoped>
    button {
        color: var(--mainTextColor);
    }

    button::before {
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        left: -50%;
        top: -50%;
        transform: scale(.5);
        border: 2px solid var(--mainTextColor);
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
        color: var(--minorColor);
    }

    .warning::before {
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        left: -50%;
        top: -50%;
        transform: scale(.5);
        border: 2px solid var(--minorColor);
    }

    .alert {
        background-color: var(--minorColor);
        color: #fff;
    }

    .next {
        color: #fff;
        background-color: var(--mainColor);
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
        background-color: rgba(0, 0, 0, .1);
    }
</style>
