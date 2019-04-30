<template>
    <div class="slider">
        <div class="block">
            <el-carousel trigger="click" height="">
                <el-carousel-item v-for="item in sliderArr" :key="item">
                        <img :src="item">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            sliderArr: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556604303113&di=d80c387758d27557bdd0aec5e7ced69b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ac915c26d040a8012029ac6af8ee.jpg%403000w_1l_0o_100sh.jpg',
                'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3409973218,2278320395&fm=26&gp=0.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=383906367,2121329694&fm=26&gp=0.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556604509978&di=cbe743b04fa28788f426ad20a9a5a780&imgtype=0&src=http%3A%2F%2Fimg3.cache.netease.com%2Fphoto%2F0003%2F2014-12-17%2FADMPSGU000B50003.jpg',
            ]
        }
    }
}
</script>

<style lang='scss'>
    .slider{
        width: 100%;

        .block{
            width: 100%;

            .el-carousel__container{
                width: 100%;
                height: 800px;
            }

            .el-carousel{
                width: 100%;
                height: 100%;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                    
            }

            .el-carousel__arrow{
                width: 50px;
                height: 50px;
                background-color: #000;
                opacity: 0.7;
                font-size: 20px;
            }
            .el-carousel__arrow:hover{
                opacity: 1;
            }
            
            .el-carousel__button{
                width: 20px;
                height: 20px;
                border-radius: 50%;
            }
            
        }
        
    }
</style>

