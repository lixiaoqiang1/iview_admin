<style scoped>
.Menu{
   padding-top: 60px;
} 
.Menu ul{
    height: 100%;
}
</style>
<template>
    <div class="Menu">
        <Menu @on-select="turnUrl" :theme="theme2" :open-names="['1']" accordion>
            <MenuItem name="Sc_ustomer">客户管理 </MenuItem>
            <MenuItem name="myclient">我的客户 </MenuItem>
            <MenuItem name="tuandui">团队客户 </MenuItem>
            <MenuItem name="fenye">分页</MenuItem>
            <MenuItem name="fenye1">分页1</MenuItem>
            <MenuItem name="fenye2">分页2</MenuItem>
            <MenuItem name="shangchuan">图片上传</MenuItem>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-filing" />
                    交互效果
                </template>
                <MenuItem name="index">条形 </MenuItem>
                <MenuItem name="about">折线</MenuItem>
                <MenuItem name="zexian">折线2</MenuItem>
                <MenuItem name="addpage">增删改查</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-filing" />
                    table表格
                </template>
                <MenuItem name="customers">table表格 </MenuItem>
                <MenuItem name="customers1">table表格导出 </MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                theme2: 'light'
            }
        },
        methods:{
            //路由跳转
            turnUrl(name) {
                console.log(name);
                this.$router.push(name);
            }
        },
        beforeCreate:function(){
            //初始化对象进入页面
            this.$router.push({path:'/myclient'});
        }
    }
</script>

