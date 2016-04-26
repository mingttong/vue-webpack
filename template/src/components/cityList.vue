<template>
    <div>
        <ele>
            <div class="city-list">
                <div class="title">首字母</div>
                <div class="city1-list">
                    <div v-for="(key, val) in cityJson.list"
                         track-by="$index"
                         class="city1-ele"
                         @click="setCity1(key)"
                         :class="{'selected': key == city1}">
                        <div>
                            \{{key}}
                        </div>
                    </div>
                </div>
            </div>
        </ele>
        <ele>
            <div class="city-list">
                <div class="title">省份</div>
                <div class="city2-list">
                    <div v-for="(key, citys) in cityJson.list"
                         track-by="$index"
                         class="city2-ele"
                         v-if="key == city1">
                        <div v-for="city in citys"
                             track-by="$index"
                             @click="setCity2(city[1][0], city[0])"
                             :class="{'selected': city[1][0] == city2}">\{{city[1][0]}}
                        </div>
                    </div>
                </div>
            </div>
        </ele>
        <ele>
            <div class="city-list">
                <div class="title">城市</div>
                <div class="city2-list">
                    <div class="city2-ele">
                        <div v-for="city in cityJson.detail"
                             track-by="$index"
                             v-if="city[2] == code1"
                             :class="{'selected': city[1][0] == city3}"
                             @click="setCity3(city[1][0], city[0])">
                            \{{city[1][0]}}
                        </div>
                    </div>
                </div>
            </div>
        </ele>
        <ele>
            <div class="city-list">
                <div class="title">区县</div>
                <div class="city2-list">
                    <div class="city2-ele">
                        <div v-for="city in cityJson.detail"
                             track-by="$index"
                             v-if="city[2] == code2"
                             :class="{'selected': city[1][0] == city4}"
                             @click="setCity4(city[1][0], city[0])">
                            \{{city[1][0]}}
                        </div>
                    </div>
                </div>
            </div>
        </ele>
        <ele>
            <div class="city-list">
                <div class="title">街道</div>
                <div class="roads">
                    <div v-for="road in roads"
                         track-by="$index"
                         class="road"
                         :class="{'selected': road[0] == code4}"
                         @click="setRoad(road[1], road[0])">
                        \{{road[1]}}
                    </div>
                </div>
            </div>
        </ele>
    </div>
</template>

<script type="text/ecmascript-6">
    import ele from '../components/ele'
    import cityJson from '../tools/cityJson'
    import utils from '../tools/utils'

    export default{
        vuex: {
            getters: {},
            actions: {}
        },
        data () {
            return {
                cityJson,
                city1: '',
                city2: '',
                city3: '',
                city4: '',
                code1: '',
                code2: '',
                code3: '',
                roads: [],
                road: '',
                code4: ''
            }
        },
        components: {
            ele
        },
        computed: {},
        methods: {
            setCity1 (city1) {
                if (city1 != this.city1) {
                    this.city1 = city1
                    this.city2 = ''
                    this.code1 = ''
                    this.city3 = ''
                    this.code2 = ''
                    this.city4 = ''
                    this.code3 = ''
                    this.road = ''
                    this.roads = []
                    this.code4 = ''
                }
            },
            setCity2 (city2, code1) {
                if (city2 != this.city2) {
                    this.city2 = city2
                    this.code1 = code1
                    this.city3 = ''
                    this.code2 = ''
                    this.city4 = ''
                    this.code3 = ''
                    this.road = ''
                    this.roads = []
                    this.code4 = ''
                }
            },
            setCity3 (city3, code2) {
                if (city3 != this.city3) {
                    this.city3 = city3
                    this.code2 = code2
                    this.city4 = ''
                    this.code3 = ''
                    this.road = ''
                    this.roads = []
                    this.code4 = ''
                }
            },
            setCity4 (city4, code3) {
                if (city4 != this.city4) {
                    this.city4 = city4
                    this.code3 = code3
                    this.road = ''
                    this.roads = []
                    this.code4 = ''
                    this.getAddress()
                }
            },
            setRoad (road, code4) {
                this.road = road
                this.code4 = code4
                const address = this.city2 + this.city3 + this.city4 + this.road
                this.$dispatch('set-address', address)
            },
            getAddress () {
                const param = {}
                param.l1 = this.code1
                param.l2 = this.code2
                param.l3 = this.code3
                param.lang = 'zh-S'
                utils.ajaxJsonp(
                    'https://lsp.wuliu.taobao.com/locationservice/addr/output_address_town_array.do',
                    param
                ).then((json) => {
                    this.roads = json.result
                })
            }
        },
        route: {},
        created () {
        },
        attached () {
        }
    }
</script>

<style scoped>
    .city-list {
        width: 100%;
    }

    .city1-list,
    .city2-list {
        display: flex;
    }

    .city2-list {
        width: 100%
    }

    .city1-ele,
    .city2-ele {
        flex: 0 1 25%;
        display: flex;
        flex-wrap: wrap;
    }

    .city2-ele {
        flex: 0 1 100%;
    }

    .city1-ele > div,
    .city2-ele > div {
        width: 100%;
        text-align: center;
        padding: 10px 5px;
        transition: .2s;
    }

    .city2-ele > div {
        flex-basis: 25%;
        width: auto;
    }

    .selected {
        background-color: #efefef;
    }

    .title {
        padding: 5px 0;
    }

    .roads {
        display: flex;
        flex-wrap: wrap;
    }

    .road {
        padding: 10px;
        min-width: 33.33%;
        transition: .2s;
    }
</style>
