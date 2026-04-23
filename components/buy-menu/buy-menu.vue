<template>
	<view class="menu-content">
		<view class="left">
			<view class="left-icon">
				<img src="/static/images/tabbar/home-active.png" alt="">
				<text>首页</text>
			</view>
			<view class="left-icon">
				<img src="/static/images/shop-nav/cart.png" alt="">
				
				购物车</view>
		</view>

		<view class="buy-btn">
			<button class="cart-btn">加入购物车</button>
			<button class="go-btn">立即购买</button>
		</view>
	</view>
</template>

<script>
export default {
	name: "buy-menu",
	data() {
		return {

		};
	}
}
</script>

<style scoped>
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
.left{
	display: flex;
	gap:18px;
}
.left-icon{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	gap:4px;
	color: #333333;
}
.left-icon img{
	width: 20px;
}
.buy-btn{
	display: flex;
	gap: 8px;
}
.cart-btn,.go-btn{
background-color: #35e2c4;
color: #ffffff;
font-size: 14px;
font-weight: 400;
width: 110px;
height: 40px;
line-height: 40px;
text-align: center;
}
.go-btn{
	background-color: #31bcff;
}
</style>