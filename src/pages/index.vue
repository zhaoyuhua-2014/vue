<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{product.title}}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{item.name}}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newList">
						<a :href="item.title">{{item.name}}</a>
						<span v-if="item.hot" class="hot-tag">HOT</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<slide-show :slides="slides" :inv="invTime" @onchange="onchangeDosomething"></slide-show>
			<div class="index-board-list">
				<dl class="index-board-item" v-for="item in boardList">
					<dt><!--<img :src="item.src"/>--></dt>
					<dd class="index-board-item-inner">
						<h2>{{item.title}}</h2>
						<p>{{item.desciption}}</p>
						<div class="index-board-button"><a href="/detail/count" class="button">立即购买</a></div>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
	import slideShow from "../components/slideshow"
	
	export default {
		components : {
			slideShow
		},
		created : function(){
			var _this = this;
			this.$http.get('/api/getNewList')
			.then(function(res){
				_this.newList = res.data;
			},function(err){
				console.log(err)
			});
			this.$http.get('/api/getProductList')
			.then(function(res){
				_this.productList = res.data;
			},function(err){
				console.log(err)
			});
			this.$http.get('/api/getBoardList')
			.then(function(res){
				_this.boardList = res.data;
			},function(err){
				console.log(err)
			})
		},
		data () {
			return {
				invTime : 4000,
				slides : [
					{
						"src":require("../assets/slideShow/pic1.jpg"),
						"title":"xxx1",
						"href":"#"
					},{
						"src":require("../assets/slideShow/pic2.jpg"),
						"title":"xxx2",
						"href":"#"
					},{
						"src":require("../assets/slideShow/pic3.jpg"),
						"title":"xxx3",
						"href":"#"
					},{
						"src":require("../assets/slideShow/pic4.jpg"),
						"title":"xxx4",
						"href":"#"
					}
				],
				productList : {},
				newList : [],
				boardList:[]
			}
		},
		methods : {
			onchangeDosomething () {
				console.log("onchangeDosomething")
			}
		}
	}
</script>

<style>
	.index-wrap {
	  width: 1000px;
	  margin: 0 auto;
	  overflow: hidden;
	}
	.index-left {
	  float: left;
	  width: 30%;
	  text-align: left;
	}
	.index-right {
	  float: left;
	  width: 70%;
	}
	.index-left-block {
	  margin: 0 15px 15px 15px;
	  background: #fff;
	  box-shadow: 0 0 1px #ddd;
	  border-radius: 10px;
	}
	.index-left-block .hr {
	  margin-bottom: 20px;
	}
	.index-left-block h2 {
	  background: #4fc08d;
	  color: #fff;
	  padding: 10px 15px;
	  margin-bottom: 20px;
	}
	.index-left-block h3 {
	  padding: 0 15px 5px 15px;
	  font-weight: bold;
	  color: #222;
	}
	.index-left-block ul {
	  padding: 10px 15px;
	}
	.index-left-block li {
	  padding: 5px;
	}
	.index-board-list {
	  overflow: hidden;
	}
	.index-board-item {
	  float: left;
	  width: 43%;
	  background: #fff;
	  box-shadow: 0 0 1px #ddd;
	  padding: 3%;
	  margin-right: 2%;
	  margin-bottom: 20px;
	  border-radius: 0 0 10px 10px;
	}
	.index-board-item:nth-child(2n){margin-right: 0;}
	.index-board-item dt{
		float: left;
		width: 125px;
		height: 125px;
		
	}
	.index-board-item dt img{width: 100%;height: 100%;}
	.index-board-item:nth-child(1) dt{background: url(../assets/images/1.png) no-repeat center;}
	.index-board-item:nth-child(2) dt{background: url(../assets/images/2.png) no-repeat center;}
	.index-board-item:nth-child(3) dt{background: url(../assets/images/3.png) no-repeat center;}
	.index-board-item:nth-child(4) dt{background: url(../assets/images/4.png) no-repeat center;}
	
	.index-board-item-inner {
	  float: left;
	  min-height: 125px;
	  padding-left: 20px;
	  line-height: 1.6;
	}
	
	
	.index-board-item h2 {
	  font-size: 18px;
	  font-weight: bold;
	  color: #000;
	  margin-bottom: 15px;
	}
	.index-board-button {
	  margin-top: 20px;
	}
	.lastest-news {
	  min-height: 512px;
	}
	.hot-tag {
	  background: #c04fb1;
	  color: #fff;
	  font-size: 12px;
	  padding: 0 5px;
	}
	.new-item {
	  display: inline-block;
	  width: 230px;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	}
	.VueCarousel {
	  margin-bottom: 10px;
	}
	.VueCarousel-slide {
	  position: relative;
	  color: #fff;
	  font-family: Arial;
	  font-size: 24px;
	  text-align: center;
	  min-height: 100px;
	  width: 100%;
	}
	.VueCarousel-slide img {
	  width: 100%;
	}
	.VueCarousel-navigation-prev {
	  left: 30px !important;
	}
	.VueCarousel-navigation-next {
	  right: 30px !important;
	}
	.VueCarousel-pagination {
	  position: absolute;
	  bottom: 10px;
	  z-index: 9;
	}
</style>