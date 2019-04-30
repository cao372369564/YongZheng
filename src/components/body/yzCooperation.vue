<template>
    <div class="yz-cooperation">
        <el-row>
            <el-col :span='24'>
                <p>正在建设...</p>
                <p>正在建设...</p>
                <p>正在建设...</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .yz-cooperation{
        

        >.el-row{
            width: 1190px;
            margin: 50px auto 40px;

            .el-col-24{
                background-color: #e5e5e5;
                padding: 50px 0;

                >p{
                    padding: 50px 0;
                    height: 100px;
                    text-align: center;
                    // border: 1px solid red;
                }
                
            }
            
        }
        
    }
</style>
