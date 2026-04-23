<script>
export default {
	onLaunch: function () {
		console.log('App Launch')
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	}
}
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	// @import "uview-plus/index.scss";
/*每个页面公共css */
@import '@/static/style/common.css';
/* 根据实际路径调整 */
@import'@/static/style/fonts/iconfont.css';


page {
	/* display: flex;
	flex-direction: column; */
	height: 100vh;

}

.content {
	padding-bottom: 70px;
	box-sizing: border-box;
}
</style>
