<template>
    <div>
        <h1>登录页面</h1>
         <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
         <Button @click="login" type="success" >登录</Button>
    </div>
</template>
<script>
export default {
    name: 'App',
    data () {
        return {
            value: ''
        }
    },
    methods:{
    login:function(){
      console.log('登录');
      this.$router.push({path:'/HelloWorld'})
    },
    mounted: function () {
      var aaa = this.$route.query.nameId
      console.log(aaa)
    },
  }
}
</script>

