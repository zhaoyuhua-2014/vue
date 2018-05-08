<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="product-board">
				<img src="../assets/images/1.png"/>
				<ul>
					<li v-for="item in productList" >{{item.name}}</li>
				</ul>
			</div>
		</div>
		<div class="detail-right">
			
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				productList:[]
			}
		},
		created : function (){
			var _this = this;
			this.$http.get("/api/getDetailProductList")
			.then(function(res){
				console.log(res.data)
				_this.productList = res.data;
			},function(err){
				console.log(err)
			});
		}
	}
</script>

<style>

.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
</style>