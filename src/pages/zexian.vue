<style scoped>

</style>

<template>
  <div>
      <Row>
        <Col span="12">
            <ve-line :data="chartData1" width="400px" height="300px"></ve-line>
        </Col>
        <Col span="12">
            <ve-histogram :data="chartData2" width="400px" height="300px"></ve-histogram>
        </Col>
    </Row>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    data: function () {
      return {
          //第一个图
        chartData1: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        //第二个图
        chartData2: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: []
        }
      }
    },
    mounted:function(){
        console.log('111');
        let _this = this;
        // this.axios.post('/api/riqi1', {
        //     firstName: '张三',
        //     age: '34'
        // }).then((res)=>{
        //     console.log(res);
        //     var aaa = res.data.data
        //     _this.chartData2.rows = aaa
        // }).catch((err)=>{
        // console.log(err);
        // })

        _this.axios.post('/api/riqi1', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        .then(function (res) {
            console.log(res);
            let aaa = res.data.data
            _this.chartData2.rows = aaa
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
</script>