<template>
	<view class="content">
		<!-- 引入banner -->
		<BannarVue />
		<!-- 引入分割线 -->
		<UniLine />
		<!-- 新闻版块 -->
		<view class="news-content">
			<view class="culture-icon" @click="goToCulture">
				<view class="culture-text" >
					<text class="text-title">企业文化</text>
					<text>您信任的都信任我们</text>
				</view>
				<img src="../../static/images/culture.jpg" alt="">
			</view>

			<view class="culture-icon" @click="goToNotice">
				<view class="culture-text">
					<text class="text-title">企业新闻</text>
					<text>静阅人间时事</text>
				</view>
				<img src="../../static/images/news.jpg" alt="">
			</view>

		</view>

		<UniLine />

		<view class="main-list">
			<!--  		水列表选择项-->
			<view class="list-top">
				<view v-for="(item, index) in headList" :key="index" :class="{ active: activeIndex === index }"
					class="top-nav" @click="changeList(index)">
					<text>{{ item.text }}</text>
					<view class="news-list-line"></view>

				</view>
			</view>
			<uniLine />

			<view class="list-content">

				<view v-for="(news, index) in filteredNews" :key="news.id" @click="goToProductDetail(news)"
					class="news-item">
					<view class="news-item-title"><text>{{ news.name }}</text>
						<text>{{ news.description }}</text>
					</view>
					<view class="news-item-line"></view>
					<view class="news-item-time iconfont"><text>2021-08-02 12:42</text>
						<text>查看详情</text>
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
			activeTab: 2, // 当前页面对应索引为2（"百科"）
			headList: [{ text: "活动通知", },
			{ text: "公告", }
			],
			activeIndex: 0, //菜单分类默认选择全部分类
			allNewsList: [
				{
					id: 1,
					name: "纯净桶装水 18.9L",
					description: "优质纯净水，适合家庭办公使用",

					category: "活动通知",
					image: "/static/images/products/water1.jpg"
				},
				{
					id: 2,
					name: "矿泉水 500ml",
					description: "天然矿泉水，口感甘甜",
					category: "活动通知",
					image: "/static/images/products/water2.jpg"
				},
				{
					id: 3,
					name: "气泡水 330ml",
					description: "进口气泡水，清爽口感",
					category: "活动通知",
				},
				{
					id: 4,
					name: "台式饮水机",
					description: "静音节能，多档温度调节",
					category: "公告",
				},
				{
					id: 5,
					name: "立式泡茶壶",
					description: "大容量，冷热双用",
					category: "公告",
				},
				{
					id: 6,
					name: "运动服饰用品 500ml",
					description: "电解质补充，运动必备",
					category: "公告",
				},
				{
					id: 7,
					name: "矿物质水 1.5L",
					description: "富含多种矿物质",
					category: "活动通知",
				},
				{
					id: 8,
					name: "高端特色食品 18.9L",
					description: "天然山泉水，品质保证",
					category: "活动通知",
				}
			]
		}
	},
	computed: {
		// 过滤分类
		filteredNews() {
			if (this.activeIndex === -1 || this.headList[this.activeIndex].text === "全部") {
				return this.allNewsList;
			}
			const selectedCategory = this.headList[this.activeIndex].text;
			return this.allNewsList.filter(news => news.category === selectedCategory);
		}
	},
	methods: {
		// 导航跳转
		handleTabChange(index) {
			this.activeTab = 2;
		},
		// 切换tab列表
		changeList(index) {
			this.activeIndex = index;
			console.log('切换菜单', index)
		},
		// 企业文化链接
		goToCulture() {
			// 这里可以跳转到产品详情页
			uni.navigateTo({
				url: `/pages/news/culture/culture`
			});
			console.log('culture跳转测试');

		},

		// 企业新闻链接
		goToNotice() {
			// 这里可以跳转到产品详情页
			uni.navigateTo({
				url: `/pages/news/notice/notice`
			});
			console.log('新闻跳转测试');

		},
		// 查看详情
		goToProductDetail(news) {
			console.log('查看产品详情:', news);
			// 这里可以跳转到产品详情页
			uni.navigateTo({
				url: `/pages/product-detail/product-detail?id=${news.id}`
			});
		},
	}
}
</script>

<style scoped>
.news-content {
	/* background-color: red; */
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.culture-icon {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 174px;
	height: 76px;
	padding: 8px;
	box-sizing: border-box;
	border-radius: 5px;
	background-color: #fff;
}

.culture-icon img {
	width: 62px;
}

.culture-text {
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	gap: 5px;
	font-size: 10px;
	color: #A7A7A7;
}

.text-title {
	font-size: 15px;
	color: #333333;
	font-weight: 600;
}


/* 活动通知 */
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

.news-list-line {
	width: 24px;
	height: 3px;
	/* background: #31BCFF; */
	border-radius: 1px;
}

.top-nav.active .news-list-line {
	background: #31BCFF;

}

.list-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	background-color: #ffffff;
	border-radius: 8px;
	padding: 12px;
	box-sizing: border-box;
	width: 348px;
	overflow: hidden;
	margin: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.news-item {
	display: flex;
	flex-direction: column;
	gap: 16px;
	/* background-color: blue; */
	font-size: 12px;
	color: #A7A7A7;

}

.news-item-title {
	display: flex;
	flex-direction: column;
	gap: 6px;
	font-size: 12px;
	width: 320px;
	color: #A7A7A7;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;


}

.news-item-title text:first-child {
	font-size: 15px;
	font-weight: 600;
	color: #333333;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.news-item-line {
	width: 320px;
	height: 1px;
	background-color: #F6F7FB;
}

.news-item-time {
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* background-color: yellow; */
	font-weight: 300;
}

.news-item-time text:last-child::after {
	content: "\e64b";
	width: 16px;
	height: 16px;
	/* background-color: red; */
	margin-left: 4px;

}
</style>
