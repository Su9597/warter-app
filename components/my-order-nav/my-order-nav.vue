<template>
	<view class="nav-container">
		<text class="nav-head">我的订单</text>

		<view class="nav-list">
			<view class="nav-list-item" v-for="(item, index) in iconList" :key="index">
				  <img class="icon-img" :src="item.icon" />
      <text class="icon-text">{{ item.text }}</text>
			</view>

		</view>
	</view>
</template>

<script>
export default {
	name: "my-order",
	data() {
		return {
 iconList: [
        { icon: '/static/images/my/all_order.png', text: '全部' },
        { icon: '/static/images/my/wait_pay.png', text: '待付款' },
        { icon: '/static/images/my/wait_send.png', text: '待配送' },
        { icon: '/static/images/my/finish.png', text: '已完成' },
        { icon: '/static/images/my/re_package.png', text: '复购套餐' },
        { icon: '/static/images/my/send_order.png', text: '配送单' }
      ]
		};
	}
}
</script>

<style scoped>
.nav-head {

	font-weight: 500;
	font-size: 15px;
	color: #333333;

}

.nav-list {
	display: flex;
	/* justify-content: flex-start; */
	/* justify-content: space-around; */
	align-items: center;
	flex-wrap: wrap;
	/* gap: 12px; */
	width: 100%;
	background-color: #fff;
	font-size: 12px;
	color: #646464;
	border-radius: 10px;
	padding: 16px 20px 0 20px;
	box-sizing: border-box;
	margin-top: 10px;
}

.nav-list-item {
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	gap: 4px;
	margin-bottom: 24rpx;
	width: 25%;

}

.nav-list-item img {
	width: 30px;
	height: 30px;
}
</style>