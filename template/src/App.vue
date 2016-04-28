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

    export default {
        store,
        vuex: {
            getters: {
                loading: state => state.loading
            },
            actions: {}
        },
        data () {
            return {}
        },
        components: {
            popup,
            loading
        },
        methods: {},
        events: {},
        created () {}
    }
</script>

<style>
    /* 这里写全局样式 */
    :root {
        --mainColor: #75D3BB; /* 主色 */
        --minorColor: #FFC100; /* 副色 */
        --bodyColor: #efefef; /* body 背景色 */
        --borderColor: #d5d5d6; /* 线条颜色 */
        --mainTextColor: #666; /* 基本文字颜色 */
        --strongTextColor: #333; /* 强调文字颜色 */
        --tipColor: #888; /* 提示文字颜色 */
        --linkColor: #FF5E38; /* 链接文字颜色 */
    }

    html, body {
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
        color: var(--strongTextColor);
        -webkit-user-select: none;
        background-color: var(--bodyColor);
        -webkit-font-smoothing: antialiased;
    }

    *, *:hover, *:active, ::before, ::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    a:matches(:link, :visited, :hover, :active) {
        text-decoration: none;
        color: inherit;
        outline: 0;
    }

    button {
        height: 48px;
        line-height: 48px;
        border: none;
        font-size: 14px;
        position: relative;
        padding: 0;
        margin: 0;
        background-color: transparent;
    }

    input {
        margin-bottom: 2px !important;
    }

    input:focus, input, textarea, textarea:focus, select {
        box-shadow: none;
        border: 0;
        background-color: #fff;
        padding: 0;
        margin: 0;
        font-size: 16px;
        outline: 0;
    }

    button:focus {
        outline: 0;
    }

    input, select {
        text-align: right;
        -webkit-appearance: none;
    }

    select {
        direction: rtl;
    }

    select:first-child {
        direction: ltr;
    }

    .fade-transition {
        transition: .2s;
        opacity: 1;
    }

    .fade-enter {
        opacity: 0;
        will-change: opacity;
    }

    .fade-leave {
        opacity: 0;
        will-change: opacity;
    }
    .tip:first-child {
        font-size: 14px;
        color: var(--tipColor);
        padding: 0 10px 10px;
    }

    .tip:last-child {
        font-size: 14px;
        color: var(--tipColor);
        padding: 10px 10px 0;
    }

    button + .tip {
        text-align: center;
    }

    .tip > a {
        color: var(--linkColor);
    }
</style>
