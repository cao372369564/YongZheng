<template>
    <div class="yz-news">
        <crumb />
        <div class="news-content">
            <news-detail />
        </div>
    </div>    
</template>

<script>
import Crumb from '@/components/plugins/Crumb.vue'
import NewsDetail from '@/components/plugins/NewsDetail.vue'
export default {
    components: {
        Crumb,
        NewsDetail
    }
}
</script>

<style lang="scss">
    .yz-news{
        margin-bottom: 50px;
    }
</style>




