<template>
	<view class="my-head">
		<view class="my-info">
			<view class="my-info-pro"><img src="@/static/images/product.jpg" alt="">
				<view class="my-info-name">
					<text>张晓明</text>
					<text>用户名：123456789</text>
				</view>
			</view>
			<view class="my-code">
				<img src="@/static/images/my/code.png" alt="">
				<text>扫一扫</text>
			</view>
		</view>
		<view class="my-grid">
			<view class="point">
				<text>2999</text>
				<text>积分</text>
			</view>
			<view class="point">
				<text>26</text>
				<text>消费券</text>
			</view>
			<view class="point">
				<text>999.99</text>
				<text>余额（元）</text>
			</view>
		</view>


	</view>

	<view class="content">
		<!-- 引入分割线 -->
		<UniLine />
		<!-- 引入会员注册 -->
		<OpenCard />
		<!-- 引入分割线 -->
		<UniLine />
		<!-- 引入我的订单 -->
		<MyOrderNav />
		<!-- 引入分割线 -->
		<UniLine />
		<MyOrderNavFun />
		<!-- 引入自定义 tabBar -->
		<CustomTabbar :current-index="activeTab" @update:currentIndex="handleTabChange" />
	</view>
</template>

<script>
import OpenCard from '@/components/open-card/open-card.vue';
import CustomTabbar from '@/components/custom-tabbar/custom-tabbar.vue';
import MyOrderNav from '../../components/my-order-nav/my-order-nav.vue';
import UniLine from '@/components/uni-line/uni-line.vue';
import MyOrderNavFun from '../../components/my-order-nav-fun/my-order-nav-fun.vue';
export default {
	components: {
		// 注册组件
		CustomTabbar,
		OpenCard, UniLine,
		MyOrderNav,
		MyOrderNavFun
	},
	data() {
		return {
			activeTab: 3 // 当前页面对应索引为3（"我的"）
		}
	},
	methods: {
		handleTabChange(index) {
			this.activeTab = 3;
		}
	}
}
</script>

<style scoped>
page {
	padding: 0;
}

.content {
	padding: 0 8px 8px 8px;

}

.my-head {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: red; */
	background: linear-gradient(180deg, #D5F6FF 0%, #FFFFFF 100%);
	padding: 58px 16px 20px 16px;
	box-sizing: border-box;
	width: 100%;
	gap: 30px;

}

.my-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

}

.my-info-pro {
	display: flex;
	gap: 16px;
}

.my-info-pro img {
	width: 53px;
	height: 53px;
	border-radius: 50%;
}

.my-info-name {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	gap: 4px;
	/* background-color: yellow; */
	font-size: 12px;
}

.my-info-name text:first-child {
	font-size: 15px;
}

.my-code {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4px;
	font-size: 12px;
	color: #333333;
}

.my-code img {
	width: 18px;
	height: 18px;
}

.my-grid {
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* background-color: #fff; */
	width: 100%;
}

.point {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 12px;
}

.point text:first-child {
	font-size: 15px;
}
</style>
