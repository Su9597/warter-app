<template>
	<!-- 分割线 -->
	<UniLine />
	<UniLine />

	<view class="address-item" @click="goToEdit">
		<view class="header">
			<text class="header-name">{{ address.name }}</text>
			<text class="header-phone">{{ formatPhone(address.phone) }}</text>
			<text v-if="address.isDefault" class="default-tag">[默认]</text>
		</view>

		<!-- 地址信息 -->
		<view class="address-info">
			<text>{{ address.province }} {{ address.city }} {{ address.district }}</text>
			<text>{{ address.street }}</text>
		</view>

		<!-- 箭头 -->
		<up-icon name="arrow-right" color="#666" size="16" class="arrow"></up-icon>
	</view>
	<view class="address-item" @click="goToEdit">
		<view class="header">
			<text class="header-name">{{ address.name }}</text>
			<text class="header-phone">{{ formatPhone(address.phone) }}</text>
			<text v-if="address.isDefault" class="default-tag">[默认]</text>
		</view>

		<!-- 地址信息 -->
		<view class="address-info">
			<text>{{ address.province }} {{ address.city }} {{ address.district }}</text>
			<text>{{ address.street }}</text>
		</view>

		<!-- 箭头 -->
		<up-icon name="arrow-right" color="#666" size="16" class="arrow"></up-icon>
	</view>
	<view class="address-btn">
		<button class="btn-add" @click="goToAdd">新增</button>
		<!-- <button class="btn-del">删除</button> -->
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
			address: {
				name: '楚绵',
				phone: '1581234531',
				isDefault: true,
				province: '广东',
				city: '广州',
				district: '白云区',
				street: 'XXXX街道'
			}
		};
	},
	methods: {
		// 格式化手机号：只显示首尾数字，中间用 * 替代
		formatPhone(phone) {
			if (!phone) return '';
			const first = phone.slice(0, 3);
			const last = phone.slice(-4);
			return `${first}****${last}`;
		},
		goToEdit() {
			uni.navigateTo({
				url: '/pages/edit-address/edit-address'
			});
		},

		goToAdd() {
			uni.navigateTo({
				url: '/pages/my/new-address/new-address'
			});
		}
	}
};
</script>

<style scoped>
page {
	padding: 0;
}

.address-item {
	position: relative;
	padding: 10px 16px;
	background-color: #fff;
	/* border-radius: 8px; */
	/* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); */
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
}

.header {
	font-size: 12px;
	color: #333;
	line-height: 48rpx;
}

.header-name {
	font-size: 16px;
	font-weight: 500;
	color: #31BCFF;
}

.header-phone {
	color: #666;
	margin-left: 6px;
}

.default-tag {
	color: #31BCFF;
	font-size: 12px;
	margin-left: 2px;
}

.address-info {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 4px;
	font-size: 12px;
	color: #666;
	line-height: 20px;
	margin-top: 5px;
}

.arrow {
	position: absolute;
	right: 16px;
	top: 50%;
	transform: translateY(-50%);
	/* font-size: 16px;
	color: #999; */
}

.address-btn {
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 36px;
	/* background-color: red; */
}

.btn-add,
.btn-del {
	width: 320px;
	height: 48px;
	font-size: 14px;
	background-color: #31BCFF;
	color: #fff;
	/* width: 80%; */
	border-radius: 22px;
	line-height: 48px;
	text-align: center;
}

.btn-del {
	margin-top: 18px;
	border: 1px solid #31BCFF;
	background-color: rgba(49, 188, 255, 0);
	color: #31BCFF;
}
</style>