<template>
    <div class="news-detail">
        <el-row>
            <el-col :span='5'>
                <div class="title" v-for='(ele,index) in newsCatalog' :key="index + '_' ">
                    <h4 :class="[curIndex == index ? 'active' : '']" @click='onTap(index)'>{{ele}}</h4>
                </div>
            </el-col>
            <el-col :span='19'>
                <ul v-if='curIndex == 0'>
                    <li v-for='(item,index) in newsArr' :key='index'>
                        <a href="#">
                            <p>{{item.news}}</p>
                        </a>
                        <span class='release-time'>{{item.time}}</span>
                    </li>
                </ul>
                
                <ul v-if='curIndex == 1'>
                    <li>
                        <p>正在建设各地快讯...</p>
                    </li>
                </ul>
                <ul v-if='curIndex == 2'>
                    <li>
                        <p>正在建设媒体关注...</p>
                    </li>
                </ul>
                <ul v-if='curIndex == 3'>
                    <li>
                        <p>正在建设更多...</p>
                    </li>
                </ul>
                
            </el-col>
            
        </el-row>
            
    </div>
</template>

<script>
export default {
    data(){
        return {
            curIndex: 0,
            newsCatalog:['院线要闻','各地快讯','媒体关注','更多'],
            newsArr: [
                {news:'寰映影城获第17届中国百货零售业“年度最佳创意新锐品牌”同心奖',time:'2019-04-08'},
                {news:'《雷霆沙赞！》上映在即 万达电影大片季“福力”加持',time:'2019-04-03'},
                {news:'万达电影组织精英训练营201901期集中培训',time:'2019-03-30'},
                {news:'2019万达大片季创新升级，万达电影APP多维度释放观影福利',time:'2019-03-21'},
                {news:'《波西米亚狂想曲》在北京万达影城CBD店举行超前点映',time:'2019-03-18'},
                {news:'万达电影组织万新生201802期集中培训',time:'2019-03-13'},
                {news:'万达电影召开2019年一季度经营分析会议',time:'2019-03-09'},
                {news:'万达电影组织2019年第一期管理大师项目',time:'2019-03-08'}
            ]
        }
    },
    methods:{
        onTap(index){
            console.log(index)
            this.curIndex = index;
        }
    }
}
</script>

<style lang="scss">
    .news-detail{
        width: 1190px;
        margin: 0 auto 20px;
        display: flex;
        justify-content: space-between;
        .el-row{
            border-top: 5px solid rgb(190, 164, 116);            
            border-radius: 5px;

            .el-col-5{
                padding-top: 20px;

                >.title{
                    width: 200px;

                    >h4{
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: center;
                        font-size: 18px;
                        font-weight: 300;
                        padding: 15px 30px;
                        color: #000;
                        border: 1px solid #999;
                        border-radius: 20px;
                        background: linear-gradient(to left,#f8f8f8,#999); 
                        cursor: pointer;   
                        
                        &.active{
                            color: #fff;
                            background: linear-gradient(to left,#999,#222);
                        }
                        
                    }

                    >h4:hover{
                        color: #fff;
                        background: linear-gradient(to left,#999,#222);
                    }
                
                }
            }

            .el-col-19{
                margin-top: 15px;

                >ul{
                    border: 1px solid #e5e5e5;
                    width: 900px;
                    

                    >li{
                        
                        padding: 20px 20px;
                        border-bottom: 1px solid #e5e5e5;
                        display: flex;
                        justify-content: space-between;

                        >a{
                            color: #666;
                            font-size: 14px;
                            text-decoration: none;
                        }

                        >a:hover{
                            text-decoration: underline;
                        }
                        
                        .release-time{
                            color: #666;
                            font-weight: 700;
                            font-size: 16px;
                            letter-spacing: 1px;
                        }
                        
                    }
                    
                }
            }

                 
        }
        
        
    }
</style>
