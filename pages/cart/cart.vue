<template>
	<!-- 自定义导航栏 -->
	<view class="custom-head">

		<view class="custom-nav">
			<view class="nav-left" @click="goBack">

<up-icon name="arrow-left" color="#333" size="20" class="back-icon"></up-icon>
				<!-- <text class="back-icon">&lt;</text> -->
			</view>
			<view class="nav-center">
				<text class="nav-title">购物车</text>
			</view>
			<view class="nav-right"></view>
		</view>

	</view>
	<!-- 引入分割线 -->
	<UniLine />


	<view class="content">

		<view class="cart-list">

			<!-- 头部 -->
			<view class="header">
				<view class="select-all">


					<view class="product-list">
						<label class="radio-label">
							<checkbox class="radio-chaeckbox" />
							<text class="radio-text">农夫商圈</text>
						</label>
						<view class="cart-item">
							<img src="/static//images/product.jpg" alt="">
							<view class="item-detail">
								<view class="item-price">
									<text>马上抢光 ￥58.97</text>
									<text>￥58.97</text>
								</view>
								<view class="item-num">
									已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱
								</view>
								<view class="item-count">
									<text>520ml*24瓶/箱</text>
									<view class="item-count-num">
										<text>数量</text>
										<up-number-box :button-width="16" :button-size="16" :input-width="32"
											:input-height="16" input-bg-color="rgba(0,0,0,0)" bgColor="#31bcff"
											disabled-bgColor="#f2f2f2" :min="1" button-color="pink" :max="10" :step="1"
											iconStyle="color: #fff; font-size: 10px;" v-model="value"
											@change="valChange"></up-number-box>
									</view>



								</view>





							</view>
						</view>
					</view>


					<view class="product-list">
						<label class="radio-label">
							<checkbox class="radio-chaeckbox" />
							<text class="radio-text">农夫商圈</text>
						</label>
						<view class="cart-item">
							<img src="/static//images/product.jpg" alt="">
							<view class="item-detail">
								<view class="item-price">
									<text>马上抢光 ￥58.97</text>
									<text>￥58.97</text>
								</view>
								<view class="item-num">
									已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱已选：某某纯净水500ml*2瓶/箱
								</view>
								<view class="item-count">
									<text>520ml*24瓶/箱</text>
									<view class="item-count-num">
										<text>数量</text>
										<up-number-box :button-width="16" :button-size="16" :input-width="32"
											:input-height="16" input-bg-color="rgba(0,0,0,0)" bgColor="#31bcff"
											disabled-bgColor="#f2f2f2" :min="1" button-color="pink" :max="10" :step="1"
											iconStyle="color: #fff; font-size: 10px;" v-model="value"
											@change="valChange"></up-number-box>
									</view>



								</view>





							</view>
						</view>
					</view>

				</view>
				<view class="menu-content">
					<view class="left">

						<label class="radio-label">
							<checkbox class="radio-chaeckbox" />
							<text class="radio-text">全选</text>
						</label>

						<view class="cart-sum">
							<text class="sum-price"><text>合计:￥243 </text><text>.12</text></text>
							<text class="sum-num">
								<text>优惠减：￥212.08 </text> <text>优惠明细</text>
							</text>
						</view>


					</view>

					<view class="buy-btn">
						<button class="go-btn">立即购买</button>
					</view>
				</view>

			</view>



		</view>



	</view>
</template>

<script>
import UniLine from '@/components/uni-line/uni-line.vue';

export default {
	components: {
		// 注册组件
		UniLine,
	},
	data() {
		return {

		};
	},
	onReachBottom() {

	},
	computed: {
	},
	onShow() {

	},
	onLoad() {

	},
	methods: {
		// 返回上一级
	goBack() {
			uni.navigateBack({
				delta: 1 // 返回上一级页面（默认值）
			});
		},

	},
};
</script>

<style scoped>

page {
	padding: 0;
	background-color: #fff;
}

.content {
	display: flex;
	flex-direction:  column;
	gap: 12px;
	padding: 0 8px 8px 8px;

}

.custom-head {
	background-image: url('@/static/images/cart-top.png');
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-position: top center;
	/* background-size: cover; */
	width: 100%;
	height: 60;
}

.custom-nav {
	display: flex;
	align-items: center;
	height: 44px;
	background-color: transparent;
	padding: 0 15px;
	position: relative;
	z-index: 10;
}

.nav-left {
	width: 40px;
	text-align: center;
}

.back-icon {
	font-size: 20px;
	/* color: red; */
}

.nav-center {
	flex: 1;
	text-align: center;
	font-size: 18px;
	color: #333333;
	font-weight: 500;
}

.nav-right {
	width: 80rpx;
}



.cart-list {
	/* background-color: red; */
	border-radius: 4px;
}

.radio-label {
	display: flex;
	/* justify-content: center; */
	align-items: center;
	font-size: 10px;
	color: #333333;
}

.radio-chaeckbox {
	transform: scale(0.5) translateX(10px) translateY(2px);
	/* margin-right: 6px; */
}

.product-list {
	background: #FFFFFF;
	box-shadow: 0px 0 4px 0px rgba(174, 174, 174, 0.5);
	border-radius: 4px;
	margin-top: 12px;
}

.cart-item {
	display: flex;
	align-items: center;
	gap: 2px;
	/* background-color: blueviolet; */
	padding: 10px;
	box-sizing: border-box;
}

.cart-item img {
	width: 64px;
	height: 64px;
	border-radius: 2px;
}

.item-detail {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 64px;
	font-size: 12px;
	color: #676767;
	overflow: hidden;
	min-width: 0;

}

.item-price text:first-child {
	font-size: 15px;
	color: #E46C8C;
}

.item-price text:last-child {
	margin-left: 12px;
	text-decoration: line-through;
}

.item-num {

	flex: 1;
	display: flex;
	align-items: center;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	/* max-width: 260px; */
	display: block;



}

.item-count {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;

}

.item-count-num {
	/* flex: 1; */
	display: flex;
	/* justify-content: space-between; */
	align-items: center;
	gap: 8px;
}

/* 底部菜单 */
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
	gap: 10px;
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

.cart-sum {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	font-size: 10px;
	color: rgba(51, 51, 51, 0.7);
}

.sum-price {
	color: #333333;
	font-weight: 600;
}

.sum-price text:first-child {
	font-size: 18px;
}

.sum-num text:last-child {
	display: inline-block;
	background-color: rgba(51, 51, 51, 0.05);
	width: 48px;
	height: 17px;
	line-height: 17px;
	text-align: center;
	border-radius: 2px;
}
</style>
