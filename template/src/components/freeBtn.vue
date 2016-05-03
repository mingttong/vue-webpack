<template>
    <div @touchmove.stop.prevent="touchmove($event)"
         :style="{transform:'translate(' + currentX + ',' + currentY + ')'}"
         class="free-btn"
         v-link="link">
        \{{text}}
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: [
            'text',
            'link'
        ],
        data () {
            return {
                currentX: window.innerWidth - 90 + 'px',
                currentY: window.innerHeight - 90 + 'px'
            }
        },
        methods: {
            touchmove (e) {
                if (e.touches[0].clientX > 40 && e.touches[0].clientX < window.innerWidth - 40) {
                    this.currentX = e.touches[0].clientX - 40 + 'px'
                }
                if (e.touches[0].clientY > 40 && e.touches[0].clientY < window.innerHeight - 40) {
                    this.currentY = e.touches[0].clientY - 40 + 'px'
                }
            }
        }
    }
</script>

<style scoped>
    .free-btn {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        position: fixed;
        z-index: 3;
        background-color: var(--mainColor);
        line-height: 80px;
        text-align: center;
        color: #fff;
        transition: .1s;
        box-shadow: 0 0 6px 4px rgba(0, 0, 0, .1);
    }
</style>
