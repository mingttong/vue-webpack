<template>
    <div class="box"
         v-show="alertShow"
         transition="scale">
        <div class="popup"
             @click.stop="">
            <div class="title">\{{title}}</div>
            <div class="content">
                <slot name="content"></slot>
            </div>
            <div class="btn-group"
                 v-if="btnList.length">
                <button v-for="btn in alertBtnList"
                        @click="btn.fn">\{{btn.text}}
                </button>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        hidePopup
    } from '../store/actions'

    export default{
        props: [
            'title',
            'alertShow',
            'btnList'
        ],
        vuex: {
            actions: {
                hidePopup
            }
        },
        computed: {
            alertBtnList () {
                const that = this
                let hidePopup = this.hidePopup
                let alertVal = []
                let val = this.btnList
                for (let i in val) {
                    alertVal.push({})
                    alertVal[i] = {
                        text: val[i].text,
                        fn: function () {
                            val[i].fn.bind(that)()
                            hidePopup()
                        }
                    }
                    if (i == val.length - 1) break
                }
                return alertVal
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import '../scss/fragment';

    .box {
        @include full-screen;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 4;
        padding: 20px;
    }

    .popup {
        width: 100%;
        background-color: white;
        border-radius: 3px;
    }

    .title {
        padding: 15px 20px 10px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }

    .scale {
        &-transition {}
        &-enter {
            animation: scaleIn .3s;
        }
        &-leave {
            animation: scaleOut .3s;
        }
    }

    @keyframes scaleIn {
        0% {
            transform: scale(0);
        }

        60% {
            transform: scale(1.1);
        }

        80% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes scaleOut {
        100% {
            transform: scale(0);
        }

        40% {
            transform: scale(1.2);
        }

        10% {
            transform: scale(1.1);
        }

        0% {
            transform: scale(1);
        }
    }

    .btn-group {
        height: 48px;
        display: flex;
        justify-content: space-between;
        position: relative;
        &::before {
            @include row-border;
            top: 0;
        }
    }

    button {
        flex: 1;
        &:active::after {
            @include active-drop
        }
    }

    .content {
        padding: 0 20px 20px;
        text-align: center;
    }
</style>
