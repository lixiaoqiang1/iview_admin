<style scoped>
#navtop{
    background-color: white;
    height: 60px;
}
.logo{
    position: absolute;
    left: 10px;
    top: 10px;
    width: 60px;
    height: 40px;
    background-color: red;
    z-index: 999;
    border-radius: 8px;
}
#navtop ul li{
    float: right;
}
</style>
<template>
    <div id="navtop">
        <div class="logo">LOGO</div>
        <Menu @on-select="btnTag1" mode="horizontal" :theme="theme1" active-name="1">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-filing" />
                    设置
                </template>
                <MenuItem name="ziliao">个人资料 </MenuItem>
                <MenuItem name="tuichu">退出</MenuItem>
            </Submenu>
            <MenuItem name="xiaoxi">消息</MenuItem>
            <MenuItem name="tixing">提醒</MenuItem>
        </Menu>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
            }
        },
        methods:{
            //路由跳转
            btnTag1(name) {
                console.log(name);
                if (name == 'tuichu') {
                    console.log('页面跳装');
                     this.$router.push({name: 'login',params:{ nameId:'10'}});

                }
            }
        }
    }
</script>

