<template>
    <div class="home-page">
        <el-container>
            <el-header height='' style='padding:0;'>
                <yz-nav />
            </el-header>
            <el-main style='padding:0;'>
                <router-view></router-view>
            </el-main>
            <el-footer height='' style='padding:0;'>
                <yz-footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import yzNav from '@/components/header/yzNav.vue';
import yzMain from '@/components/body/yzMain.vue';
import yzFooter from '@/components/footer/yzFooter.vue';
export default {
    components:{
        yzNav,
        yzMain,
        yzFooter
    }
}
</script>



