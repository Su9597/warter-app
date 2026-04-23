<template>
	<u-popup type="dialog" v-model="show">
		<view class="popup-content">
			<!-- 标题栏 -->
			<view class="title-bar">
				<u-tabs :list="tabList" :current="currentTab" @change="changeTab"></u-tabs>
				<text class="close-btn" @click="close">×</text>
			</view>

			<!-- 地址列表 -->
			<scroll-view class="scroll-container" scroll-y>
				<view v-for="(item, index) in addressList" :key="index" class="address-item">
					<!-- 地址信息 -->
					<view class="address-info">
						<text class="address-text">{{ item.province }} {{ item.city }} {{ item.district }}</text>
						<text class="address-text">{{ item.detail }}</text>
						<text class="contact-text">{{ item.name }} {{ formatPhone(item.phone) }}</text>
					</view>

					<!-- 操作区 -->
					<view class="action-area">
						<u-radio-group v-model="item.isDefault" @change="setAsDefault(item)">
							<u-radio :name="true" size="18">
								<text v-if="item.isDefault" class="default-text">已设为默认</text>
								<text v-else class="default-text">设为默认</text>
							</u-radio>
						</u-radio-group>

						<view class="btn-group">
							<text class="btn-text" @click="copyAddress(item)">复制</text>
							<text class="btn-text" @click="editAddress(item)">修改</text>
							<text class="btn-text delete-btn" @click="deleteAddress(item)">删除</text>
						</view>
					</view>
				</view>
			</scroll-view>

			<!-- 新建地址按钮 -->
			<view class="add-address-btn" @click="addNewAddress">
				+ 新建地址
			</view>
		</view>
	</u-popup>
</template>

<script setup>
import { ref, reactive } from 'vue';

const show = ref(false);
const currentTab = ref(0);

const tabList = [
  { name: '收货地址' },
  { name: '配送服务' }
];

const addressList = reactive([
  {
    id: 1,
    province: '江苏省苏州市吴中区',
    city: '长桥街道',
    district: '',
    detail: '苏苑新村北区 34 号楼 202室',
    name: '苏丽丽',
    phone: '15665131708',
    isDefault: true
  },
  {
    id: 2,
    province: '江苏省宿迁市宿豫区',
    city: '豫新街道',
    district: '',
    detail: '豫园小区 19 幢 2 单元 803',
    name: '苏丽丽',
    phone: '15665131708',
    isDefault: false
  },
  {
    id: 3,
    province: '江苏省宿迁市宿城区',
    city: '洋河镇',
    district: '',
    detail: '庄西村 1 组',
    name: '沈珊珊',
    phone: '18262846145',
    isDefault: false
  },
  {
    id: 4,
    province: '江苏省宿迁市泗阳县',
    city: '众兴街道',
    district: '',
    detail: '大兴木业时代广场',
    name: '张三',
    phone: '13800138000',
    isDefault: false
  }
]);

// 格式化手机号
const formatPhone = (phone) => {
  if (!phone) return '';
  return `${phone.slice(0, 3)}****${phone.slice(-4)}`;
};

// 切换标签页
const changeTab = (index) => {
  currentTab.value = index;
};

// 设置为默认
const setAsDefault = (item) => {
  // 清除其他默认标记
  addressList.forEach(i => i.isDefault = false);
  item.isDefault = true;
};

// 复制地址
const copyAddress = (item) => {
  uni.setClipboardData({
    data: `${item.name} ${item.phone}\n${item.province}${item.city}${item.detail}`,
    success: () => {
      uni.showToast({ title: '已复制到剪贴板' });
    }
  });
};

// 修改地址
const editAddress = (item) => {
  uni.navigateTo({
    url: `/pages/edit-address/edit-address?id=${item.id}`
  });
};

// 删除地址
const deleteAddress = (item) => {
  uni.showModal({
    title: '提示',
    content: '确定要删除该地址吗？',
    success: (res) => {
      if (res.confirm) {
        addressList.splice(addressList.indexOf(item), 1);
      }
    }
  });
};

// 新建地址
const addNewAddress = () => {
  uni.navigateTo({
    url: '/pages/add-address/add-address'
  });
};

// 打开弹窗
const open = () => {
  show.value = true;
};

// 关闭弹窗
const close = () => {
  show.value = false;
};

// 暴露方法供外部调用
defineExpose({
  open,
  close
});
</script>

<style scoped>
.popup-content {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  max-height: 80vh;
}

.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
}

.close-btn {
  font-size: 36rpx;
  color: #666;
}

.scroll-container {
  height: 600rpx;
  overflow-y: auto;
}

.address-item {
  background-color: #f8f8f8;
  border-radius: 12rpx;
  padding: 20rpx;
  margin-bottom: 16rpx;
}

.address-info {
  margin-bottom: 16rpx;
}

.address-text {
  font-size: 28rpx;
  color: #333;
  line-height: 40rpx;
}

.contact-text {
  font-size: 26rpx;
  color: #666;
}

.action-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-group {
  display: flex;
  gap: 30rpx;
}

.btn-text {
  font-size: 24rpx;
  color: #999;
}

.delete-btn {
  color: #ff3b30;
}

.add-address-btn {
  width: 100%;
  height: 80rpx;
  background-color: #ff3b30;
  border-radius: 40rpx;
  line-height: 80rpx;
  text-align: center;
  color: #fff;
  font-size: 28rpx;
  margin-top: 20rpx;
}
</style>