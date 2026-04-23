<template>
	<view class="nav-container">
		<text class="nav-head">其他功能</text>

		<view class="nav-list">
			<view class="nav-list-item" v-for="(item, index) in iconList" :key="index"
				@click="navigateToPage">
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
				{ icon: '/static/images/my/recharge.png', text: '会员充值', pagePath: 'pages/my/org-member/org-member' },
				{ icon: '/static/images/my/org_chart.png', text: '组织架构', pagePath: '/pages/my/org-member/org-member' },
				{ icon: '/static/images/my/pre_kpi.png', text: '业绩数据', pagePath: '/pages/my/org-member/org-member' },
				{ icon: '/static/images/my/order_form.png', text: '报单', pagePath: '/pages/my/org-member/org-member' },
				{ icon: '/static/images/my/exit.png', text: '退出登录', pagePath: '' }
			]
		};
	},
	methods: {
		navigateToPage() {
			uni.navigateTo({
				url: `/pages/my/org-member/org-member`
			});
			console.log('culture跳转测试');
		},



		logout() {
			// 退出登录的逻辑
			// 1. 清除用户信息
			uni.removeStorageSync('userInfo');
			uni.removeStorageSync('token');

			// 2. 跳转到登录页面
			uni.reLaunch({
				url: '/pages/login/login'
			});

			uni.showToast({
				title: '已退出登录',
				icon: 'success'
			});
		}
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