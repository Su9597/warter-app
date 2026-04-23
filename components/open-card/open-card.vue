<!-- 注册会员卡组件 -->
<template>
	<view class="container">
		<view class="open-text">
			<view class="iconfont icon-huiyuan" style="font-size: 12px"></view>
			<text class="card-text">水卡卡VIP</text>
			<text>开通会员卡享受更多优惠</text>
		</view>
		<view class="open-btn" @click="handleClick">立即开通</view>
	</view>
</template>

<script>
import { handleError } from 'vue';
export default {
	name: 'open-card',
	data() {
		return {};
	},
	methods:{
		// 立即开通按钮
		handleClick(){
			console.log('测试')
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #414141;
	color: #ffdba0;
	width: 100%;
	height: 48px;
	line-height: 48px;
	border-radius: 8px;
	padding: 0 10px;
	box-sizing: border-box;
}
.open-text {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin-left: 10px;
	font-size: 12px;
	font-weight: 300;
	/* background-color: red; */
}
.card-text {
	font-size: 16px;
	font-weight: 400;
}
.open-btn {
	/* background-color: red;
	 */
	background: linear-gradient(90deg, #ffefce 0%, #ffdba0 100%);
	width: 78px;
	height: 28px;
	line-height: 28px;
	text-align: center;
	border-radius: 14px;
	color: #333333;
	font-size: 14px;
	font-weight: 500;
}
</style>
