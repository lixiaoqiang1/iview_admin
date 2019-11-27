<template>
    <div>
        <p>我的客户我的客户</p>
        <div class="form-input">
            <Input style="width:200px" v-model="name"><span slot="prepend">姓名：</span></Input>
            <Input style="width:200px" v-model="phone"><span slot="prepend">手机号：</span></Input>
            <Input style="width:200px" v-model="money"><span slot="prepend">金额：</span></Input>
            <label>状态：</label>
            <Select v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Button type="primary" @click="sub">提交</Button>
        </div>
        <div class="clearfix"></div>
        
    </div>
</template>
<script>
export default {
        data () {
            return {
                name:'',
                phone:'',
                money:'',
                cityList: [
                    {
                        value: '未处理',
                        label: '未处理'
                    },
                    
                    {
                        value: '跟进中',
                        label: '跟进中'
                    },
                    {
                        value: '已上门',
                        label: '已上门'
                    },
                ],
                model1: ''
            }
        },
        methods:{
            sub(){
                var name = this.name;
                var phone = this.phone;
                var money = this.money;

                var han = /^[\u4e00-\u9fa5]+$/gi;
                var reg2 = /^(1[0-9]{10})$/;
                var num = /([1-9]\d*(\.\d*[1-9])?)/;
                if (name == '') {
                    alert('姓名不能为空');
                    return false;
                }
                if (!han.test(name)) {
                    alert('姓名汉字');
                    return false;
                }
                if (name.length <= 1 || name.length >= 5) {
                    alert('2-4位数汉字');
                    return false;
                }
                if (phone == '') {
                    alert('电话号码不能为空');
                    return false;
                }
                if (money == '') {
                    alert('额度不能为空');
                    return false;
                }
                
                console.log(name + '121212');
                var jsons = {
                    'name': name,
                    'phone': phone,
                    'money': money,
                }
                console.log(jsons);
                axios({
                    method:'post',
                    data:jsons,
                    url:'user.json'
                }).then(function(res){
                    console.log(res);
                });
                
            }
        }
    }
</script>


<style scoped>
.clearfix{
    clear: both;
}
.form-input{
    width: 100%;padding: 10px 0;
}
.form-input .ivu-input-wrapper{
    float: left;
    margin: 0px 10px 5px 0;
}
.ivu-page{
    margin-top: 20px;
    text-align: center
}
</style>
