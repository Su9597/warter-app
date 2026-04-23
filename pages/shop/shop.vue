<template>
	<view class="content">
		<!-- 商城banner -->
		<BannarVue />
		<!-- 分割线 -->
		<UniLine />
		<!-- 引入头部导航 -->
		<ShopTopNav />

		<!-- 产品列表 -->

		<!-- 菜单 -->
		<uniLine />
		<view class="main-list">
			<!--  		水列表选择项-->
			<view class="list-top" >
				<view v-for="(item, index) in waterList" :key="index" :class="{ active: activeIndex === index }"
					class="top-nav" @click="changeList(index)">
					<text>{{ item.text }}</text>
					<view class="product-list-line"></view>

				</view>
			</view>
			<uniLine />
			<view class="list-content">



				<view v-for="(product, index) in filteredProducts" :key="product.id" @click="goToProductDetail"
					class="product-item">
					<img src="@/static/images/product.jpg" alt="">
					<view class="product-info">
						<text class="product-name">{{ product.name }}</text>

						<view class="product-price-row">
							<view class="product-left">
								<text class="product-price">
									<text>120.00</text>元/箱</text>

								<text class="product-desc">全国已售603件 </text>
							</view>

							<button class="add-to-cart-btn main-bg-color">加入</button>
						</view>
					</view>
				</view>




			</view>



		</view>




		<!-- 引入自定义 tabBar -->
		<CustomTabbar :current-index="activeTab" @update:currentIndex="handleTabChange" />
	</view>
</template>

<script>
import BannarVue from '@/components/bannar/bannar.vue';
import UniLine from '@/components/uni-line/uni-line.vue';
import ShopTopNav from '@/components/shop-top-nav/shop-top-nav.vue';
import CustomTabbar from '@/components/custom-tabbar/custom-tabbar.vue'
export default {
	components: {
		// 注册组件
		BannarVue,
		CustomTabbar, UniLine,
		ShopTopNav
	},
	data() {
		return {
			activeTab: 1,// 当前页面对应索引为1（"商城"）
			waterList: [{text: "全部",},
				 {text: "特色食品",}, 
			{text: "生活日用",}, 
			{text: "服饰用品",}, 
			{text: "泡茶壶",},
			],
			activeIndex: 0, //菜单分类默认选择全部分类
			allProducts: [
				{
					id: 1,
					name: "纯净桶装水 18.9L",
					description: "优质纯净水，适合家庭办公使用",
					price: "25.00",
					category: "特色食品",
					image: "/static/images/products/water1.jpg"
				},
				{
					id: 2,
					name: "矿泉水 500ml",
					description: "天然矿泉水，口感甘甜",
					price: "2.50",
					category: "生活日用",
					image: "/static/images/products/water2.jpg"
				},
				{
					id: 3,
					name: "气泡水 330ml",
					description: "进口气泡水，清爽口感",
					price: "5.00",
					category: "服饰用品",
					image: "/static/images/products/drinks1.jpg"
				},
				{
					id: 4,
					name: "台式饮水机",
					description: "静音节能，多档温度调节",
					price: "299.00",
					category: "泡茶壶",
					image: "/static/images/products/machine1.jpg"
				},
				{
					id: 5,
					name: "立式泡茶壶",
					description: "大容量，冷热双用",
					price: "599.00",
					category: "饮水机",
					image: "/static/images/products/machine2.jpg"
				},
				{
					id: 6,
					name: "运动服饰用品 500ml",
					description: "电解质补充，运动必备",
					price: "4.50",
					category: "饮料",
					image: "/static/images/products/drinks2.jpg"
				},
				{
					id: 7,
					name: "矿物质水 1.5L",
					description: "富含多种矿物质",
					price: "3.00",
					category: "生活日用",
					image: "/static/images/products/water3.jpg"
				},
				{
					id: 8,
					name: "高端特色食品 18.9L",
					description: "天然山泉水，品质保证",
					price: "35.00",
					category: "特色食品",
					image: "/static/images/products/water4.jpg"
				}
			]
		};

	},
	computed: {
		// 过滤分类
		filteredProducts() {
			if (this.activeIndex === -1 || this.waterList[this.activeIndex].text === "全部") {
				return this.allProducts;
			}
			const selectedCategory = this.waterList[this.activeIndex].text;
			return this.allProducts.filter(product => product.category === selectedCategory);
		}
	},
	methods: {
		handleTabChange(index) {
			this.activeTab = 1;
		},
		// 切换列表
		changeList(index) {
			this.activeIndex = index;
			console.log('切换菜单', index)
		},
		
		// 查看产品详情
		goToProductDetail() {
			console.log('查看产品详情:', );
			// 这里可以跳转到产品详情页
			uni.navigateTo({
				url: `/pages/shop/product-detail/product-detail`
			});
		},

		// 添加到购物车
		addToCart(product) {
			console.log('添加到购物车:', product);
			// 这里可以实现添加到购物车的逻辑
			uni.showToast({
				title: `${product.name} 已添加到购物车`,
				icon: 'success'
			});
		}
	}
}
</script>

<style scoped>
.main-list {
	width: 100%;
	/* background-color: red; */
}

.list-top {
	display: flex;
	/* justify-content: space-around; */
	/* align-items: center; */
	text-align: center;
	/* line-height: 90px; */
	/* height: 90px; */
	/* line-height: 90px; */
}

.top-nav {
	/* background-color: blue; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 76px;
	/* height: 90px; */
	/* line-height: 90px; */
	/* margin: auto; */
	flex-direction: column;
	gap: 1px;
	justify-self: start;
	align-items: center;
	font-size: 15px;
	color: rgba(51, 51, 51, 0.7);


}

.top-nav img {
	/* width: 34px; */
	height: 34px;
}

.top-nav.active {
	color: #333333;
}

.top-nav.active .product-list-line {
	background: #31BCFF;

}

.list-content {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}


.product-list-line {
	width: 18px;
	height: 3px;
	/* background: #31BCFF; */
	border-radius: 1px;
}

.product-item {
	background-color: #FFFFFF;
	width: 174px;
	/* height: 212px; */
	border-radius: 5px;
	overflow: hidden;
	/* text-align: center; */


}

.product-item img {
	width: 174px;
	height: 127px;
	/* border-radius: 10px 10px 0 0; */
}

.product-info {
	padding: 6px;
	box-sizing: border-box;
	overflow: hidden;
	text-overflow: ellipsis;


}

.product-name {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #333333;
	font-size: 18px;
	font-weight: 500;
}

.product-price-row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 9px;

}

.product-left {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: start;
	font-size: 10px;
	color: #333333;
}

.product-price {
	color: #E46C8C;
}

.product-price text {
	font-size: 18px;
	margin-right: 2px;
}

.add-to-cart-btn {
	width: 62px;
	height: 32px;
	border-radius: 10px;
	font-size: 15px;
	font-weight: 400;
	line-height: 32px;
	text-align: center;
	margin: 0;
}
</style>
