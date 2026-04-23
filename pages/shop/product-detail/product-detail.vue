<template>

	<view class="product-content">

		<!-- 自定义导航栏 -->
		<view class="custom-head">
			<img src="@/static/images/culture/culture_1.jpg" alt="" mode="aspectFill" class="custom-img">
			<view class="custom-nav">
				<view class="nav-left" @click="goBack">

					<up-icon name="arrow-left" color="#ffffff" size="20" class="back-icon"></up-icon>
					<!-- <text class="back-icon">&lt;</text> -->
				</view>
			</view>

		</view>


		<!-- 内容区 -->

		<view class="content">
			<!-- 详情头部 -->
			<view class="product-head">
				<text class="product-title">这里是放标题的这里是放标题的这里是放标题的这里是放标题的这里是放标题的这里是放标题的这里是放标题的</text>
				<text class="product-subtitle">规格：520*20瓶/箱</text>
				<view class="product-price">
					<text class="price-cost"><text>120.00 </text>元/箱</text>
					<text class="price-sale">销量：9999</text>
				</view>
			</view>
			<!-- 引入会员卡注册 -->
			<OpenCard />
			<UniLine />


			<!-- tab切换 -->
			<view class="product-desc">
				<!-- 菜单 -->
				<view class="desc-tab">
					<!--  		水列表选择项-->
					<view class="tab-item">
						<view v-for="(item, index) in tabList" :key="index" :class="{ active: activeIndex === index }"
							class="top-nav" @click="changeList(index)">
							<text>{{ item.text }}</text>
						</view>

					</view>

					<!-- <uniLine /> -->

					<!-- 分类显示 -->
					<view class="list-content">
						<view v-if="activeIndex === 0" class="product-introduce">
							<!-- 商品详情 -->
							<img src="/static/images/article_2.jpg" alt="" mode="aspectFill" class="custom-img">
							<img src="/static/images/article_1.jpg" alt="" mode="aspectFill" class="custom-img">
							<img src="/static/images/article_2.jpg" alt="" mode="aspectFill" class="custom-img">

						</view>
						<view v-else-if="activeIndex === 1" class="product-history" v-for="(item, index) in allHistory"
							:key="index">
							<!-- 购买记录 -->
							<view class="history-left">
								<img :src="item.image" alt="">
								<text>用户：{{ maskString(item.name) }}</text>
							</view>
							<text class="history-right">购买：{{ item.num }}箱</text>
						</view>

					</view>



				</view>




			</view>
		</view>

		<!-- 购买菜单 -->
		<!-- <BuyMenu /> -->

		<view class="menu-content">
			<view class="left">
				<view class="left-icon" @click="goToHome">
					<img src="/static/images/tabbar/home-active.png" alt="">
					<text>首页</text>
				</view>
				<view class="left-icon" @click="goToCart">
					<img src="/static/images/shop-nav/cart.png" alt="">

					购物车
				</view>
			</view>

			<view class="buy-btn">
				<button class="cart-btn" @click="addToCart">加入购物车</button>
				<button class="go-btn" @click="goToBuy">立即购买</button>
			</view>
		</view>


	</view>
</template>
<script>
import UniLine from '@/components/uni-line/uni-line.vue';
import OpenCard from '@/components/open-card/open-card.vue';
import BuyMenu from '@/components/buy-menu/buy-menu.vue'




export default {

	components: {
		// 注册组件
		UniLine,
		OpenCard,
		BuyMenu
	},


	data() {
		return {

			tabList: [{
				text: "商品详情",
			}, {
				text: "购买记录（900）",
			},
			],
			activeIndex: 0, //菜单分类默认选择全部分类
			allHistory: [
				{
					name: "镜花水月1",
					num: 4,
					image: "/static/images/logo.png"
				},
				{
					name: "镜花水月2",
					num: 25,
					image: "/static/images/product.jpg"
				},
				{
					name: "镜花水月2",
					num: 65,
					image: "/static/images/logo.png"
				},
			]
		}

	},
	computed: {
		// 过滤分类
		filteredProducts() {
			if (this.activeIndex === -1 || this.tabList[this.activeIndex].text === "全部") {
				return this.allProducts;
			}
			const selectedCategory = this.tabList[this.activeIndex].text;
			return this.allProducts.filter(product => product.category === selectedCategory);
		}

	},
	methods: {
		goBack() {
			uni.navigateBack({
				delta: 1 // 返回上一级页面（默认值）
			});
		},

		// 切换列表
		changeList(index) {
			this.activeIndex = index;
			console.log('切换菜单', index)
		},
		// 过滤字符，多的用*代替
		maskString(str) {
			if (str.length <= 2) return str; // 长度≤2直接返回
			// 中文用 slice，英文用 str[0]
			const firstChar = str.slice(0, 1); // 第一个字符
			const lastChar = str.slice(-1); // 最后一个字符
			const maskedPart = '*'.repeat(str.length - 2); // 中间用*代替
			return firstChar + maskedPart + lastChar;
		},
		//返回首页
		goToHome() {
			uni.switchTab({
				url: `/pages/home/home`
			});
			console.log('返回首页测试');

		},
		//购物车查看
		goToCart() {
			uni.navigateTo({
				url: `/pages/cart/cart`
			});
			console.log('返回首页测试');

		},
		// 加购
		addToCart() {
			console.log('添加到购物车:',);
			uni.showToast({
				// title: `${product.name} 已添加到购物车`,
				title: `已添加到购物车`,
				icon: 'success'
			});
		},
		goToBuy() {
			console.log('跳转下单页:',);
			uni.navigateTo({
				url: `/pages/my/buy-page/buy-page`
			});
		}

	}
};
</script>

<style scoped>
page {
	padding: 0;
}

.content {
	display: flex;
	flex-direction: column;
	padding: 0 8px 8px 8px;
	border-radius: 16px 16px 0 0;
	/* background-color: #F5F5F5; */
	background: linear-gradient(180deg, #e8f8ff 0%, #FFFFFF 100%);
	/* height: 128px; */
	width: 100%;
	/* margin-top: -36px; */
	transform: translateY(-36px);
	/* padding-bottom: 60px; */
	box-sizing: border-box;

}


.custom-head {
	position: relative;
	/* background-image: url('@/static/images/culture/culture_1.jpg'); */
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-position: top center;
	/* background-size: cover; */
	width: 100%;
	height: 220px;
}

.custom-img {
	width: 100%;
	height: 100%;
}

.custom-nav {
	position: absolute;
	display: flex;
	align-items: center;
	height: 28px;
	width: 28px;
	background-color: transparent;

	z-index: 10;

	top: 10px;
	left: 10px;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 14px;
}


.back-icon {
	/* font-size: 20px; */
	margin-left: 3px;
}

/* 详情头部 */
.list-content {
	padding-bottom: 16px;
	box-sizing: border-box;
}

.product-head {
	display: flex;
	flex-direction: column;
	/* background-color: yellow; */
	/* width: 100%; */
	padding: 16px 12px;
	box-sizing: border-box;
	font-size: 12px;
	color: #a8a8a8;
}

.product-title {
	/* background-color: red; */
	margin-bottom: 12px;
	color: #333333;
	font-size: 16px;
	font-weight: 500;

}

/* .product-subtitle {
	background-color: blue;
} */

.product-price {
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* background-color: blueviolet; */
	/* width: 100%; */
	margin-top: 32px;

}

.price-cost {
	/* background-color: green; */
	color: #E46C8C;

}

.price-cost text {
	font-size: 20px;
}

/* .price-sale {

	background-color: peru;
} */
/* .product-desc {
	background-color: red;
} */

.desc-tab {
	/* display: flex; */
	/* background-color: yellow; */
	padding: 12px;
	box-sizing: border-box;
}

.tab-item {
	display: flex;
	gap: 8px;
	/* background-color: blue; */
}

.top-nav {
	font-size: 18px;
	color: #333333;

}

.top-nav.active {
	color: #31bcff;
	/* background-color: rebeccapurple; */
}

.product-introduce {
	margin-top: 24px;

}

.product-history {
	margin-top: 24px;
	/* background-color: red; */
}

.product-history,
.history-left {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 12px;
	color: #666666;
}

.history-left {
	gap: 8px;
}

.history-left img {
	width: 36px;
	height: 36px;
	border-radius: 18px;
}

/* 购买菜单 */
.menu-content {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	/* background-color: red; */
	background-color: #fff;
	/* border-top: 1px solid #e5e5e5; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 999;
	box-shadow: 0 0 5px 0px rgba(94, 94, 94, 0.25);
	width: 100%;
	height: 60px;
	padding: 0 16px;
	box-sizing: border-box;
}

.left {
	display: flex;
	gap: 18px;
}

.left-icon {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	gap: 4px;
	color: #333333;
}

.left-icon img {
	width: 20px;
}

.buy-btn {
	display: flex;
	gap: 8px;
}

.cart-btn,
.go-btn {
	background-color: #35e2c4;
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
	width: 110px;
	height: 40px;
	line-height: 40px;
	text-align: center;
}

.go-btn {
	background-color: #31bcff;
}
</style>