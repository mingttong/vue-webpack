<template>
    <btn :cut="3"
         :text="text"
         class="get-code"
         @click="getCode"
         :next="true"
         :allow="allow"></btn>
</template>

<script type="text/ecmascript-6">
    import btn from '../components/btn'
    import utils from '../tools/utils'

    export default{
        props: [
            'phoneNum',
            'required',
            'fn'
        ],
        data () {
            return {
                text: '获取验证码',
                allow: true
            }
        },
        components: {
            btn
        },
        methods: {
            getCode () {
                if (this.required) {
                    if (this.phoneNum.length === 11) {
                        this.fn()
                        this.startCount()
                    } else {
                        utils.alert("请输入11位手机号码")
                    }
                } else {
                    this.fn()
                    this.startCount()
                }
            },
            startCount () {
                let count = 60
                this.text = `剩余${count}秒`
                this.allow = false
                let start = setInterval(() => {
                    if (count === 1) {
                        clearInterval(start)
                        this.text = '获取验证码'
                        this.allow = true
                    } else {
                        count--
                        this.text = `剩余${count}秒`
                    }
                }, 1000)
            }
        }
    }
</script>

<style scoped>
    .get-code {
        position: absolute;
        height: 50px;
        top: 0;
        right: 0;
        font-size: 15px;
    }
</style>
