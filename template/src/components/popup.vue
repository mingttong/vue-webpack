<template>
    <div @touchmove.stop.prevent="touchmove()">
        <backdrop :backdrop-show="popupShow"></backdrop>
        <alert @click="ifHidePopup"
               :alert-show="popupShow"
               :btn-list="btnList"
               :title="title">
            <div slot="content">\{{{popupSettings.content}}}</div>
        </alert>
    </div>
</template>

<script type="text/ecmascript-6">
    import backdrop from '../components/backdrop'
    import alert from '../components/alert'
    import {
        hidePopup
    } from '../store/actions'

    export default{
        vuex: {
            getters: {
                popupShow: state => state.popupShow,
                popupSettings: state => state.popupSettings,
                popupHideBan: state => state.popupHideBan
            },
            actions: {
                hidePopup
            }
        },
        computed: {
            title () {
                return this.popupSettings.title
            },
            content () {
                return this.popupSettings.content
            },
            btnList () {
                return this.popupSettings.btnList
            }
        },
        components: {
            backdrop,
            alert
        },
        methods: {
            ifHidePopup () {
                if (!this.popupHideBan) {
                    this.hidePopup()
                }
            },
            touchmove () {}
        }
    }
</script>

<style scoped>

</style>
