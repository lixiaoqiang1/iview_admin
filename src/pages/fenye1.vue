<template>
    <div>
        <p>自定义删除</p>
      <Table border :columns="columns7" :data="data6"></Table>
      <Page :total="dataCount" show-total show-elevator  :show-size="pageSize" class="paging" @on-change="changepage" />
    </div>
</template>
<style scoped>
  .paging{
     text-align: center;
      margin-top:10px;
  }
</style>
<script>
    let testData = {
        "histories": [
            {id:'21',name: 'John1', age: 18,address: 'New'},
            {id:'13',name: 'John2', age: 18,address: 'New'},
            {id:'32',name: 'John3', age: 18,address: 'New'},
        ]
    }
    export default {
        data () {
            return {
                ajaxHistoryData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:10,
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }

                ],
                data6: []
            }
        },
        methods:{
            // 获取历史记录信息
            handleListApproveHistory(){
                // 保存取到的所有数据
                this.ajaxHistoryData = testData.histories
                this.dataCount = testData.histories.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(testData.histories.length < this.pageSize){
                    this.data6 = this.ajaxHistoryData;
                }else{
                    this.data6 = this.ajaxHistoryData.slice(0,this.pageSize);
                } 
            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.data6 = this.ajaxHistoryData.slice(_start,_end);
            },

            //弹出
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            //删除
            remove (index) {
                this.$Modal.confirm({
                    title: '提示',
                    content: '<p>是否删除</p>',
                    onOk: () => {
                        this.$Message.info('已删除');
                        console.log(this.data6[index].id)
                        this.data6.splice(index, 1);
                    },
                    onCancel: () => {
                        this.$Message.info('取消');
                    }
                });
            }
        },
        created(){
             this.handleListApproveHistory();
        }
    }
</script>