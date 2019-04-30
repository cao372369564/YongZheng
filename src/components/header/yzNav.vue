<template>
    <div class="yz-nav"  id='return-top'>

        <div class="roof">
            <div class="nav-left">
                <div class="logo">
                    <img src="@/assets/icon/LOGO.png" alt="">
                </div>
                <p class='title'>
                    <span>河南永正校园电影院线有限公司</span>
                </p>
            </div>
            

            <div class="nav-intro">
                <router-link to="/">永正首页</router-link>
                <router-link :to="{name:'news',params:{title:'新闻'}}">新闻中心</router-link>
                <router-link :to="{name:'cooperation',params:{title:'合作机构'}}">合作机构</router-link>
                <router-link :to="{name:'join',params:{title:'加入我们'}}">加入我们</router-link>
                <router-link :to="{name:'about',params:{title:'关于我们'}}">关于我们</router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '@/assets/components/header/yzNav.scss';
</style>

