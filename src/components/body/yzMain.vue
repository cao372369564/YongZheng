<template>
    <div class="yz-main">
        <slider />

        <div class="cooperation">
            <h2>部分合作办事处</h2>
            <a href="#return-top">回顶部</a>
            <ul>
                <li v-for='(item,index) in cooperationArr' :key='index'>
                    <img :src="item.picture" alt="">
                    <span>{{ item.address }}</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import Slider from '@/components/plugins/Slider.vue';
export default {
    components: {
        Slider,
    },
    data(){
        return {
            cooperationArr: [
                {address: '开封',picture:require('@/assets/icon/cooperation/luohe.jpg')},
                {address: '许昌',picture:require('@/assets/icon/cooperation/xuchang.jpg')},
                {address: '焦作',picture:require('@/assets/icon/cooperation/jiaozuo.jpg')},
                {address: '安阳',picture:require('@/assets/icon/cooperation/anyang.jpg')},
                {address: '漯河',picture:require('@/assets/icon/cooperation/luohe.jpg')},
                {address: '信阳',picture:require('@/assets/icon/cooperation/xinyang.jpg')},
                {address: '济源',picture:require('@/assets/icon/cooperation/jiyuan.jpg')}
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/components/body/yzMain.scss';
</style>
