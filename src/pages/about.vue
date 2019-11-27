<template>
    <div>
        <p>再分配客户</p>
        <div id="mychart1" style="width:570px;height:250px;"></div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.draw();
    },
    methods: {
        draw: function () {
            let echart1 = this.$echarts.init(document.getElementById('mychart1'));
            var randomData1 = [];
            var randomData2 = [];
            var randomData3 = [];
            var randomData4 = [];
            for(var i = 0; i<30; i++){
                randomData1.push(Math.floor(Math.random()*100));
                randomData2.push(Math.floor(Math.random()*100));
                randomData3.push(Math.floor(Math.random()*100));
                randomData4.push(Math.floor(Math.random()*100));
            }

            // 指定图表的配置项和数据
            var option1 = {
                title:{
                    text:'<<当日设备OEE分析'
                },
                legend:{},
                dataset: {
                    source: [
                        ['product', 'oee', 'qe', 'pe', 'ae'],
                        ['10:00', 41.1, 30.4, 65.1, 53.3],
                        ['11:00', 86.5, 92.1, 85.7, 83.1],
                        ['12:00', 24.1, 67.2, 79.5, 86.4],
                        ['13:00', 55.2, 67.1, 69.2, 72.4],
                        ['14:00', 55.2, 67.1, 69.2, 72.4],
                        ['15:00', 55.2, 67.1, 69.2, 72.4],
                        ['16:00', 55.2, 67.1, 69.2, 72.4]
                    ]
                },
                xAxis: {
                    type: 'category',

                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    { type: 'line', color:'blue'},
                    { type: 'line', color:'green'},
                    { type: 'line', color:'yellow'},
                    { type: 'line', color:'pink'}
                    ],

            };
// 使用刚指定的配置项和数据显示图表。
            echart1.setOption(option1);
            setInterval(function(){
                randomData1.push(Math.floor(Math.random()*100));
                randomData1.shift();
                randomData2.push(Math.floor(Math.random()*100));
                randomData2.shift();
                randomData3.push(Math.floor(Math.random()*100));
                randomData3.shift();
                randomData4.push(Math.floor(Math.random()*100));
                randomData4.shift();

                echart1.setOption({
                    xAxis: {
                        data: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00']
                    },

                    series: [
                        { data: randomData1 , type: 'line', color:'blue'},
                        { data: randomData2,  type: 'line', color:'green'},
                        { data: randomData3,  type: 'line', color:'yellow'},
                        { data: randomData4,  type: 'line', color:'pink'}
                        ],

                });
            }, 3000)
            }
        }
    }
</script>
