<template>
	<view class="nav-container">
		<view class="nav-kinds" @click="changeOrder">
			<img src="@/static/images/shop-nav/order.png" alt="" class="nav-img-order">
			<text>我的订单</text>
		</view>
		<view class="nav-line"></view>
		<view class="nav-kinds"  @click="changeCart">
			<img src="@/static/images/shop-nav/cart.png" alt="" class="nav-img">
			<text>购物车</text>
		</view>
	</view>
</template>

<script>
export default {
	name: "shop-top-nav",
	data() {
		return {

		};
	},
	methods:{
		// 切换nav
		// 去我的订单页
		changeOrder(e) {
			// this.activee = index;
			console.log('切换菜单', e)
		},
		// 去购物车
		changeCart(e) {
			// this.activee = index;
			console.log('去购物车', e)
		},
	}
}
</script>

<style scoped>
.nav-container {
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #333333;
	font-size: 15px;
	font-weight: 400;
	padding: 14px;
	box-sizing: border-box;
	box-shadow: 0px 0 4px 0px rgba(182, 182, 182, 0.5);
	border-radius: 8px;
}

.nav-kinds {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 9px;
}

.nav-img-order {
	width: 23px;
}

.nav-img {
	width: 26px;
}

.nav-line {
	background-color: #979797;
	width: 1px;
	height: 22px;
}
</style>