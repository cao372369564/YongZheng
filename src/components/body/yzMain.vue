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

        <div class="school">
            <h2>部分合作院校</h2>
            <ul>
                <li v-for='(item,index) in schoolArr' :key='index + "_" '>
                    <img :src="item.picture" alt="">
                    <span>{{ item.name }}</span>
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
            ],
            schoolArr : [
                {name: '信阳农林学院',picture: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557120977029&di=96b42d69641e7c625ad908cb57a38b04&imgtype=0&src=http%3A%2F%2Fpic.gaokao.haedu.cn%2Fimage%2Fnews%2F170609045751091402.jpg'},
                {name: '信阳职业技术学院',picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557121121219&di=51fafc5472eaa607545ad6a4bef42908&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F876b3ebfjw1e2hdab5bhcj.jpg'},
                {name: '安阳师范学院',picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557121246502&di=851ad70352d398e33055f7f4bda38665&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Fmap%2Fpic%2Fitem%2Fb219ebc4b74543a94ec9e08d1d178a82b80114a4.jpg'},
                {name: '黄河水利职业技术学院',picture:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557121270350&di=45118eaac575e3b069585c2f1f55c438&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F2f3295d44f998620a18bb78c.jpg'}
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/components/body/yzMain.scss';
</style>
