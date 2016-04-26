<template>
    <div>
        <group :fixed="true">
            <btn :cut="1"
                 :text="'fixed btn'"
                 @click="onSubmit"></btn>
        </group>
        <group>
            <validator name="validator">
                <form novalidate>
                    <div slot="tip_top"
                         class="tip">
                        <ele>
                            <div>顶部 tip</div>
                            <div slot="right">tip</div>
                        </ele>
                    </div>
                    <ele>
                        <div>姓名</div>
                        <input type="text"
                               slot="right"
                               placeholder="请输入姓名"
                               v-model="username"
                               v-validate:username="validRules.username">
                        <span slot="unit">单位</span>
                    </ele>
                    <ele>
                        <div>地址</div>
                        <div>{{address?address:'--请选择地址--'}}</div>
                    </ele>
                </form>
            </validator>
        </group>
        <more></more>
        <group>
            <city-list @set-address="setAddress"></city-list>
        </group>
        <group :single="true">
            <btn :cut="1"
                 :text="'single btn'"
                 @click="onSubmit"></btn>
            <div slot="tip_bottom"
                 class="tip">bottom tip
            </div>
        </group>
    </div>
</template>

<script type="text/ecmascript-6">
    import btn from '../../components/btn'
    import row from '../../components/row'
    import ele from '../../components/ele'
    import group from '../../components/group'
    import more from '../../components/more'
    import cityList from '../../components/cityList.vue'
    import utils from '../../tools/utils'
    import {
        validRules,
        validators,
        toValidate
    } from '../../tools/formcheck'

    export default{
        props: [],
        vuex: {
            getters: {},
            actions: {}
        },
        data () {
            return {
                validRules,
                username: '',
                address: ''
            }
        },
        computed: {},
        components: {
            btn,
            row,
            ele,
            group,
            more,
            cityList
        },
        methods: {
            toValidate,
            onSubmit () {
                // 手动验证
                this.toValidate(() => {
                    utils.alert('成功')
                })
            },
            setAddress (address) {
                this.address = address
            }
        },
        validators: validators,
        events: {},
        created () {
        },
        attached () {
        }
    }
</script>

<style scoped>

</style>
