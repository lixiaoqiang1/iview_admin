<template>
    <div>
        <p>主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页主页</p>
        <div id="myChart" :style="{width: '600px', height: '300px'}"></div>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted(){
         // 初始化
         this.drawLine();

        // this.$http.get('http://localhost:8088/test').then(response => {
        //      console.log(response.data);
        //     // get body data
        //     // this.someData = response.body;
        //          this.drawLine();
        // }, response => {
        //     console.log("error");
        // });
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
}
</script>

