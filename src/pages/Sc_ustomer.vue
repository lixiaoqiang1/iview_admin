<template>
    <div>
        <Menu @on-select="turnUrl" mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="/Sc_ustomer_my">我的客户1</MenuItem>
            <MenuItem name="/Sc_ustomer_tuan">团队客户1</MenuItem>
            <MenuItem name="/Sc_ustomer_lizhi"> 离职人员客户分配1 </MenuItem>
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
            this.$router.push({path:'/Sc_ustomer_my'});
        }
    }
</script>
<style scoped>
.ivu-menu-horizontal {
    height: 50px;
    line-height: 50px;
}
</style>

