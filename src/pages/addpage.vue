<style scoped>
	table,
	th,
	td {
		border: 1px solid #ccc;
		border-collapse: collapse;
	}
	
	td {
		padding: 6px 9px;
	}
</style>

<template>
	<div>
		<form action="">
			<input type="text" placeholder="姓名" v-model="addDetail.name">
			<input type="tel" placeholder="年龄" v-model="addDetail.age">
			<input type="date" placeholder="日期" v-model="addDetail.datas">
			<button type="buttom" @click="addbtn">新增</button>
		</form>
		<div v-if="bianji">
			<span @click="bianji=false">X</span>
			<div>
				<input type="text" placeholder="姓名" v-model="editDetail.name">
				<input type="tel" placeholder="年龄" v-model="editDetail.age">
				<input type="date" placeholder="日期" v-model="editDetail.datas">
				<button type="buttom" @click="update">更新</button>
				<button type="buttom" @click="bianji=false">取消</button>
			</div>
		</div>
		<table>
			<tr>
				<th>序号</th>
				<th>姓名</th>
				<th>年龄</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item,index) in items">
				<td>{{index+1}}</td>
				<td>{{item.name}}</td>
				<td>{{item.datas}}</td>
				<td>
					<span @click="deletelist(item,index)">删除</span>
					<span class="edit" @click="edit(item)">编辑</span>
				</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		data() {
				return {
					addDetail: {},
					editDetail: {},
					bianji: false,
					items: [
                        {name: '张三1',age: '32',datas: '2.01',id: '11'},
                        {name: '张三1',age: '32',datas: '2.01',id: '11'},
                        {name: '张三1',age: '32',datas: '2.01',id: '11'},
                        ],
					editid: ''
				}
			},
			methods: {
				//新增
				addbtn: function() {
					this.items.push({
						name: this.addDetail.name,
						age: this.addDetail.age,
						datas: this.addDetail.datas,
					})
				},
				//删除
				deletelist: function(item, index) {
					console.log(item.id)
					this.items.splice(index, 1);
					// 这边可以传id给服务端进行删除 ID = id
					// axios.get('url',{ID:id}).then((res) =>{
					//          //加载列表              
					// })
				},
				//编辑
				edit: function(item) {
					// console.log(item.id)
					console.log(item)
					this.editDetail = {
						name: item.name,
						age: item.age,
						datas: item.datas,
					}
					this.bianji = true
					this.editid = item.id
				},
				update: function() {
					//编辑的话，也是传id去服务端
					//axios.get('url',{ID:id}).then((res) =>{
					//          加载列表                
					//})
					let _this = this
					for(let i = 0; i < _this.items.length; i++) {
						if(_this.items[i].id == this.editid) {
							_this.items[i] = {
								name: this.editDetail.name,
								age: this.editDetail.age,
								datas: this.editDetail.datas,
							}
							this.bianji = false
						}
					}
				}
			}
	}
</script>