<template>
    <div class="about-us">
       <el-row>
           <el-col :span='24'>
                <p>河南永正校园电影院线有限公司</p>
                <p>一直致力于打造优质大中小学校园文化建设，为学生们的精神生活增添一抹精彩！</p>
           </el-col>
       </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .about-us{
        margin: 70px 0 40px;

        .el-row{
            width: 1190px;
            margin: auto;

            .el-col-24{
                height: 500px;

                >p{
                    color: #222;
                    margin: 50px auto;
                    letter-spacing: 1px;
                }
                
            }
            
        }
        
    }
</style>

