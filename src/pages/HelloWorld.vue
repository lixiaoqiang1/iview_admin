<template>
  <div class="content">
    <router-view></router-view>
    <navtop class="navtop"></navtop>
    <navleft class="navleft"></navleft>
    
  </div>
</template>

<script>
import navtop from '@/components/navtop'
import navleft from '@/components/navleft'

export default {
  name: 'HelloWorld',
  data () {
      return {
         
      }
  },
  methods: {
      handleTabsAdd () {
          this.tabs ++;
      }
  },
  components:{navtop,navleft }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    padding: 70px 0 0 250px;
  }
  .navtop{
    width: 100%;
    height: 100px;
    background: #eeeeee;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }
  .navleft{
      width: 240px;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background: #ccc;
      z-index: 4;
  }
</style>
