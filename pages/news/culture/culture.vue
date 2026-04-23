<template>

	<!-- 自定义导航栏 -->
	<view class="custom-head">

		<view class="custom-nav">
			<view class="nav-left" @click="goBack">

<up-icon name="arrow-left" color="#ffffff" size="20" class="back-icon"></up-icon>
				<!-- <text class="back-icon">&lt;</text> -->
			</view>
			<view class="nav-center">
				<text class="nav-title">企业文化</text>
			</view>
			<view class="nav-right"></view>
		</view>

	</view>
	<!-- 引入分割线 -->
	<UniLine />



	<!-- 内容区 -->

	<view class="content">

		<view class="module-item" v-for="(item, index) in cultureList" :key="index">

			<view class="module_left" >
				<view class="module">
					<text class="module-head">
						<text class="module-title">{{ item.title }}</text>
						<text class="module-subtitle">{{item.subtitle}}</text>
					</text>
					<view class="module-line"></view>
					<view class="module-content">
						<text class="highlight">{{item.summary}}</text>
						<text class="description">
							{{item.desc}}
						</text>
					</view>
				</view>

			</view>
			<img class="module-img" :src="item.imgPath" mode="aspectFill">




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
				{ title: "企业介绍",subtitle:"QI YE JIE SHAO",summary:"始于滨海，专注未来", desc:"我们于2019年在一座充满创新活力滨海城市创立。我们不仅是服务的提供者，更是问题的终结者。核心业务围绕企业人才生命周期关键环节展开：从中高端关键人才寻访，到定制化人才发展培训项目，乃至整个人力资源职能的模块化外包。",imgPath:"/static/images/culture/culture_3.jpg"
				},
				{ title: "主营业务",subtitle:"ZHU YING YE WU",summary:"深耕产业，赋能增长", desc:"我们的服务已深入智能制造、生物医药、新消费、绿色能源及数字经济等多个前沿与支柱产业。我们与众多行业领军企业、高速成长的创新公司以及跨国机构建立了稳固的伙伴关系，成功应对了复杂多变的人才挑战。",imgPath:"/static/images/culture/culture_4.jpg"},	
				{ title: "企业理念",subtitle:"QI YE LI NIAN",summary:"理念为帆，行稳致远", desc:"我们始终秉持三个核心信条：根基在于务实，成败系于细节，未来源于诚信。这不仅是我们的工作准则，更是我们对每一位合作伙伴的郑重承诺。我们相信数据的力量，并以此为基础，不断研发创新的跨界服务产品。",imgPath:"/static/images/culture/culture_5.jpg"}
			]
		}

	},

	methods: {
		goBack() {
			uni.navigateBack({
				delta: 1 // 返回上一级页面（默认值）
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
	flex-direction:  column;
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
	font-weight: 500;
}

.nav-right {
	width: 80rpx;
}

/* 模块一 */

.module-item {
	display: flex;
	justify-content: space-between;
	align-items: start;
	/* background-color: palevioletred; */
	padding: 8px;
	box-sizing: border-box;


}
.module_left{
	flex:1;
}
.module-img {
	margin-left: 24px;
	width: 120px;
}

.module {
	display: flex;
	flex-direction: column;
	gap: 4px;
	/* background-color: red; */
	/* width: 40%; */
	font-size: 12px;
	color: #666666;
}

.highlight,
.module-subtitle {
	color: #31BCFF;
}

.module-subtitle {
	margin-left: 8px;
}

.highlight {
	font-size: 15px;
	font-weight: 500;
}

.module-title {
	font-size: 20px;
	font-weight: 700;
	color: #333333;
}



.module-line {
	background-color: #31BCFF;
	/* width: 200px; */
	height: 1px;
}

.module-content {
	display: flex;
	flex-direction: column;
	/* background-color: green; */
}

.description {
	margin-top: 4px;
	/* width: 210px; */
}
</style>