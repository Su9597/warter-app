<template>
	<view class="address-form">
		<!-- 地址 -->
		<view class="form-item">
			<text class="label">地址</text>
			<view class="value">
				<text class="text" @click="show = true">{{ displayAddress }}</text>
				<!-- 箭头 -->
				<up-icon name="arrow-right" color="#666" size="16" class="arrow"></up-icon>
				<up-cascader v-model:show="show" v-model="value" :data="areaData" @change="onCascaderChange"
					@confirm="onCascaderConfirm" :level="3" confirmButtonText="确认"></up-cascader>
			</view>
		</view>

		<!-- 门牌号 -->
		<view class="form-item">
			<text class="label">门牌号</text>
			<input class="input" type="text" placeholder="例：15栋3层301室" v-model="doorplate" />
		</view>

		<!-- 收货人 -->
		<view class="form-item">
			<text class="label">收货人</text>
			<view class="value">
				<input class="input" type="text" placeholder="收货人姓名" v-model="recipientName" />
				<view class="gender">
					<view class="radio-group">
						<view class="radio-item" :class="{ active: gender === 'male' }" @click="toggleGender('male')">
							<view class="custom-radio" :class="{ checked: gender === 'male' }"></view>
							<text class="radio-text">先生</text>
						</view>
						<view class="radio-item" :class="{ active: gender === 'female' }"
							@click="toggleGender('female')">
							<view class="custom-radio" :class="{ checked: gender === 'female' }"></view>
							<text class="radio-text">女士</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 手机号 -->
		<view class="form-item">
			<text class="label">手机号</text>
			<input class="input" type="number" placeholder="收货人手机号" v-model="phone" />
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			gender: '', // 初始为空，表示未选择
			show: false,
			value: [], // 级联选择器需要数组格式
			doorplate: '',
			recipientName: '',
			phone: '',
			selectedLabels: [], // 存储选中的地址标签
			areaData: [
				{
					label: '北京市',
					value: '11',
					children: [
						{
							label: '市辖区',
							value: '1101',
							children: [
								{ label: '东城区', value: '110101' },
								{ label: '西城区', value: '110102' },
								{ label: '朝阳区', value: '110105' }
							]
						}
					]
				},
				{
					label: '天津市',
					value: '12',
					children: [
						{
							label: '市辖区',
							value: '1201',
							children: [
								{ label: '和平区', value: '120101' },
								{ label: '河东区', value: '120102' },
								{ label: '河西区', value: '120103' }
							]
						}
					]
				},
				{
					label: '河北省',
					value: '13',
					children: [
						{
							label: '石家庄市',
							value: '1301',
							children: [
								{ label: '长安区', value: '130102' },
								{ label: '桥西区', value: '130104' },
								{ label: '新华区', value: '130105' }
							]
						},
						{
							label: '唐山市',
							value: '1302',
							children: [
								{ label: '路南区', value: '130202' },
								{ label: '路北区', value: '130203' },
								{ label: '古冶区', value: '130204' }
							]
						}
					]
				}
			]
		}
	},
	computed: {
		displayAddress() {
			if (this.selectedLabels.length > 0) {
				return this.selectedLabels.join(' ');
			}
			return '选择详细地址';
		}
	},
	methods: {
		toggleGender(selected) {
			this.gender = selected;
		},
		onCascaderChange(e) {
			console.log('级联选择器值改变:', e);
			// 不再手动设置 this.value，让 v-model 自动管理
			this.selectedLabels = e.labels || [];
		},
		onCascaderConfirm(e) {
			console.log('级联选择器确认:', e);
			// 不再手动设置 this.value，让 v-model 自动管理
			this.selectedLabels = e.labels || [];
			this.show = false; // 关闭级联选择器
		}
	}
}
</script>

<style scoped>
.address-form {
	padding: 12px;
	width: 100%;
	background-color: #fff;
	border-radius: 12px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
	box-sizing: border-box;
}

.form-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 0;
	border-bottom: 1px solid #e5e5e5;
	box-sizing: border-box;
}

.form-item:last-child {
	border-bottom: none;
}

.label {
	font-size: 12px;
	color: #333;
	width: 42px;
}

.value {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 5px;
}

.text {
	font-size: 12px;
	color: #666;
	flex: 1;
}

.arrow {
	font-size: 14px;
	color: #666;
	margin-left: 5px;
}

.input {
	flex: 1;
	font-size: 12px;
	color: #333;
	padding: 0;
	border: none;
	outline: none;
	background: transparent;
	padding-left: 5px;
}



.gender {
	margin-top: 5px;
	display: flex;
	gap: 20px;
}

.radio-group {
	display: flex;
	align-items: center;
	gap: 10px;
}

.radio-item {
	display: flex;
	align-items: center;
	gap: 4px;
	padding: 2px 4px;
	border-radius: 4px;
}

.custom-radio {
	width: 16px;
	height: 16px;
	border: 1px solid #ccc;
	border-radius: 50%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}

.custom-radio.checked {
	border-color: #00c48c;
	background-color: #00c48c;
}

.custom-radio.checked::after {
	content: '';
	width: 8px;
	height: 8px;
	background-color: #fff;
	border-radius: 50%;
}

.radio-text {
	font-size: 14px;
	color: #666;
}
</style>



