<template>
    <div class="join-us">
        <el-row>
            <el-row :span='24'>
                <p>加入我们</p>
                <p>正在建设...</p>
            </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .join-us{
        // background-color: #f40;
        padding: 70px 0 40px;

        >.el-row{
            width: 1190px;
            height: 500px;
            margin: auto;

            >.el-row{
                // background-color: #13d1be;

                >p{
                    // border: 1px solid red;
                    margin-top: 10px;
                    padding: 50px 0;
                    font-weight: 700;
                    font-size: 20px;
                }
            }
            
        }
        
    }
</style>
