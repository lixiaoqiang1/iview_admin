<template>
    <div>
        <Menu @on-select="turnUrl" mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="/kehu">我的客户</MenuItem>
            <MenuItem name="/kehualls">团队客户</MenuItem>
            <MenuItem name="/kehufenpei"> 离职人员客户分配 </MenuItem>
        </Menu>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
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
            this.$router.push({path:'/kehu'});
        }
    }
</script>
<style scoped>
.ivu-menu-horizontal {
    height: 50px;
    line-height: 50px;
}
</style>
