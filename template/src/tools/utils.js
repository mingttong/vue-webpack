/**
 * Created by hq5544 on 16/3/30.
 * 全部的工具函数
 */
import Vue from 'vue'
import Router from '../router/router'
import store from '../store/store'
import {
    showPopup,
    settingPopup,
    toggleLoading,
    toggleHideBan
} from '../store/actions'

const utils = {
    alert (content, ban) {
        // alert 弹窗
        const settings = {}
        settings.content = content
        settingPopup(store, settings)
        showPopup(store)
        toggleHideBan(store, ban)
    },
    confirm (content, title, btnList, ban) {
        // confirm 弹窗
        const settings = {}
        settings.content = content
        settings.title = title
        settings.btnList = btnList
        settingPopup(store, settings)
        showPopup(store)
        toggleHideBan(store, ban)
    },
    ajaxForm (url, param, ignoreToken) {
        return utils.ajax(url, param, ignoreToken, {
            emulateJSON: true
        })
    },
    ajaxJson (url, param, ignoreToken) {
        return utils.ajax(url, param, ignoreToken, {
            emulateJSON: false
        })
    },
    ajaxJsonp (url, param) {
        return new Promise((resolve) => {
            toggleLoading(store, true)
            Vue.http.jsonp(url, param).then((response) => {
                toggleLoading(store, false)
                resolve(response.data)
            })
        })
    },
    ajax (url, param = null, ignoreToken, options) {
        // ajax 的封装
        let tokenParam = ''
        if (!ignoreToken) {
            tokenParam = `?token=${store.state.token}`
        }
        return new Promise((resolve, reject) => {
            toggleLoading(store, true)
            Vue.http.post(url + tokenParam, param, options).then((response) => {
                toggleLoading(store, false)
                if (response.data.code === '200') {
                    resolve(response.data.object)
                } else {
                    if (response.data.message && response.data.code !== '401') {
                        utils.alert(response.data.message)
                    } else {
                        utils.confirm('登录过期, 请重新登录', '提示', [
                            {
                                text: '去登录',
                                fn () {
                                    Router.go({
                                        path: '/login',
                                        replace: true
                                    })
                                }
                            }
                        ], true)
                    }
                    reject(response.data)
                }
            }).catch((response) => {
                toggleLoading(store, false)
                utils.confirm(`网络错误 status: ${response.status}`, '错误', [], true)
            })
        })
    },
    getArg(name) {
        // 在 App.vue 中无法获取 router 对象, 所以需要手动获取 query 参数
        const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
        const r = window.location.search.substr(1).match(reg)
        if (r !== null) return decodeURI(r[2])
        return null
    },
    //判断访问终端
    browser () {
        const u = navigator.userAgent
        return {
            trident: u.indexOf('Trident') > -1, // IE内核
            presto: u.indexOf('Presto') > -1, // opera内核
            webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
            iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, // 是否iPad
            webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
            qq: u.match(/\sQQ/i) === ' qq', // 是否QQ
            language: (
                navigator.browserLanguage || navigator.language
            ).toLowerCase()
        }
    }
}

export default utils
