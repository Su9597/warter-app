<template>

	<!-- 内容区 -->

	<view class="content">

		<view class="module-item" v-for="(item, index) in cultureList" :key="index">

			<view class="module" @click="goToDetail">
				<view class="module-head">
					<text class="module-title">{{ item.title }}</text>
					<text class="description">
						{{ item.time }}
					</text>
				</view>
				<view class="module-right">
					<img class="module-img" src="@/static/images/culture/culture_4.jpg" alt="">
				</view>

			</view>







		</view>



		<!-- 内容区 -->
		<scroll-view class="content-scroll" scroll-y="true">

			<!-- 模块一：企业介绍 -->



		</scroll-view>




	</view>
</template>
<script>
import UniLine from '@/components/uni-line/uni-line.vue';

export default {

	components: {
		// 注册组件
		UniLine
	},
	data() {
		return {
			cultureList: [
				{
					title: "“羽”你同行|黄山无极雪助力第二十届北京羽毛球公开赛火热开赛", time: "2025-07-16", imgPath: "/static/images/culture/culture_3.jpg"
				},
				{ title: "“羽”你同行|黄山无极雪助力第二十届北京羽毛球公开赛火热开赛", time: "2025-07-16", imgPath: "/static/images/culture/culture_3.jpg" }
				,
				{ title: "“羽”你同行|黄山无极雪助力第二十届北京羽毛球公开赛火热开赛", time: "2025-07-16", imgPath: "/static/images/culture/culture_3.jpg" }
				,
				{ title: "“羽”你同行|黄山无极雪助力第二十届北京羽毛球公开赛火热开赛", time: "2025-07-16", imgPath: "/static/images/culture/culture_3.jpg" }
				,
				{ title: "“羽”你同行|黄山无极雪助力第二十届北京羽毛球公开赛火热开赛", time: "2025-07-16", imgPath: "/static/images/culture/culture_3.jpg" }
			]
		}

	},

	methods: {
		goBack() {
			uni.navigateBack({
				delta: 1 // 返回上一级页面（默认值）
			});
		},
	// 查看详情
	goToDetail() {
			// 这里可以跳转到产品详情页
			uni.navigateTo({
				url: `/pages/news/details/details`
			});
			console.log('新闻跳转测试');

		},
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
	gap: 12px;
	padding: 0 8px 8px 8px;

}

.custom-head {
	background-image: url('@/static/images/culture/culture_1.jpg');
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-position: top center;
	/* background-size: cover; */
	width: 100%;
	height: 220px;
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
	color: white;
}

.nav-center {
	flex: 1;
	text-align: center;
	font-size: 18px;
	color: white;
	font-weight: bold;
}

.nav-right {
	width: 80rpx;
}

/* 模块一 */

.module-item {
	display: flex;
	justify-content: space-between;
	align-items: start;
	background-color: #ffffff;
	padding: 8px;
	box-sizing: border-box;


}


.module {
	display: flex;
	justify-content: center;
	align-items: start;
	/* gap: 4px; */
	/* background-color: red; */
	/* width: 40%; */
	font-size: 12px;
	color: #666666;
	border-radius: 8px;
	/* padding: 12px; */
	box-sizing: border-box;
}

.module-head {
	flex: 1;
	display: flex;
	flex-direction: column;
	height: 80px;
	justify-content: space-between;
	align-items: start;
	/* background-color: red; */
}

.module-title {
	font-size: 15px;
	font-weight: 700;
	color: #333333;
	/* background-color: yellow; */
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}



.description {
	margin-top: 4px;
	/* width: 210px; */
	background-color: #fff;
}

.module-right {
	margin-left: 16px;
	width: 80px;
	height: 80px;
	overflow: hidden;
	border-radius: 8px;
	background-color: red;
}

.module-img {
	width: 100%;
	height: 100%;
	object-fit: cover;

}
</style>