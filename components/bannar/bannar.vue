<template>
	<view class="container">
		<!-- 这里是banner图 -->
		<img src="/static/images/banner.jpg" alt="" />
	</view>
</template>

<script>
	export default {
		name:"uni-bannar",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.container{
	background-color: red;
	width: 100%;
	height: 100px;
	border-radius: 10px;
	text-align: center;
	line-height: 100px;
}
img{
	height: 100px;
	width: 100%;
}
</style>