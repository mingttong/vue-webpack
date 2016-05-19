<template>
    <div id="app">
        <loading :show="loading"></loading>
        <router-view transition="fade"
                     transition-mode="out-in"></router-view>
        <popup></popup>
    </div>
</template>

<script type="text/ecmascript-6">
    import store from './store/store'
    // 只需要在根组件绑定一次, 子组件全部可以通过 this.$store 访问
    import loading from './components/loading'
    import popup from './components/popup'
    import utils from './tools/utils'

    export default {
        store,
        vuex: {
            getters: {
                loading: state => state.loading
            }
        },
        components: {
            popup,
            loading
        },
        methods: {
            setBrowserClass () {
                const browser = utils.browser()
                if (browser.android) {
                    this.browserClass = {
                        'android': true
                    }
                }
                if (browser.ios) {
                    this.browserClass = {
                        'ios': true
                    }
                }
            }
        },
        created () {
            this.setBrowserClass()
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    /* 这里写全局样式 */
    @import './scss/normal';

    .fade {
        &-transition {
            transition: .2s;
            opacity: 1;
            will-change: opacity;
        }
        &-enter,
        &-leave {
            opacity: 0;
            will-change: opacity;
        }
    }

    .tip {
        font-size: 14px;
        color: $TIP_COLOR;
        &:first-child {
            padding: 0 10px 10px;
        }
        &:last-child {
            padding: 10px 10px 0;
        }
        > a {
            color: $LINK_COLOR;
        }
    }

    button + .tip {
        text-align: center;
    }
</style>
