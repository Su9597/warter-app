<template>
	<view class="login-content">
		<view class="logo">
			<img src="../../static/images/logo.png" alt="">
			<text class="logo-name">某某app</text>
			<text>伯温清露商城</text>

		</view>

		<view class="form">

			<view class="">

				<view class="form-item">
					<text class="label">手机号登录</text>
					<input class="input form-phone" type="number" placeholder="请输入手机号" v-model="phone" maxlength="11" />
				</view>


				<!-- 验证码输入 -->
				<view class="form-item">
					<view class="verify-box">
						<input class="input" type="number" placeholder="输入验证码" v-model="code" maxlength="6" />
						<view class="verify-btn" :disabled="countdown > 0" @click="sendVerifyCode">
							{{ countdown > 0 ? `${countdown}s 后重发` : '获取验证码' }}
						</view>
					</view>
				</view>


				<view class="form-info">
					<text>没有账号？扫码注册</text>或
					<text>点击注册</text>
				</view>

			</view>


			<!-- 登录按钮 -->



			<view class="form-btn">
				<view class="agreement">
					<input type="radio"  value="true" class="radio" />
					<text class="agree-text">我已阅读并同意 《隐私政策》 和 《用户协议》</text>
				</view>

				<!-- 登录按钮 -->
				<!-- :disabled="!phone || !code || !agree"  @click="handleLogin"-->
				<button class="login-btn">
					登录
				</button>

			</view>


		</view>



	</view>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>

<style scoped>
page{
	background-image: url('@/static/images/bgc-login.png');
	background-size: 100% auto;
	background-repeat: no-repeat;
  background-position: top center;
  /* background-size: cover; */
}


.login-content {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	padding-top: 64px;
	padding-bottom: 18px;
	box-sizing: border-box;
}

.logo {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 6px;
	font-size: 12px;
	color: #787878;
	
}

.logo img {
	width: 70px;
	height: 70px;
}

.logo-name {
	font-size: 20px;
	font-weight: 500;
	color: #333333;
	margin-top: 6px;
}

.form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	/* width: 100%;
	height: 65%; */
	gap: 140px;
}

.input {
	width: 338px;
	height: 48px;
	border: 1px solid #CED8DE;
	background-color: #F8FCFE;
	border-radius: 12px;
	font-size: 12px;
	color: rgba(51, 51, 51, 0.5);
	padding: 12px;
	box-sizing: border-box;
}

.form-phone {
	margin-top: 12px;
}

.verify-box {
	margin-top: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.verify-box .input {
	width: 250px;
	height: 48px;
}

.verify-btn {
	font-size: 15px;
	color: #31BCFF;
	border: 0;
	margin-left: 12px;
}

.form-info {
	display: flex;
	justify-content: center;
	gap: 2px;
	margin-top: 26px;
	font-size: 15px;
	color: #333333;
}

.form-info text:first-child {
	color: #31BCFF;
}

.radio {
	width: 12px;
	height: 12px;
}

.agreement {
	display: flex;
	justify-content: center;
	align-items: center;
}

.agree-text {
	margin-left: 2px;
	font-size: 12px;
	margin-top: -3px;
}

.login-btn {


	background-color: #31BCFF;

	width: 330px;
	height: 45px;
	margin-top: 14px;
	border-radius: 22px;
	border: none;
	color: #FFFFFF;
	line-height: 45px;
	text-align: center;
	font-size: 15px;


}

.login-btn::after {
	border: none;
	/* background-color: #31BCFF; */
	/* color:#FFFFFF; */
}
</style>
