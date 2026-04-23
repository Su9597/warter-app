<template>
  <view class="custom-tabbar">
    <view 
      v-for="(item, index) in tabList" 
      :key="index" 
      class="tab-item" 
      :class="{ active: currentIndex === index }"
      @tap="switchTab(index)"
    >
      <view class="icon-box">
        <image :src="currentIndex === index ? item.selectedIconPath : item.iconPath" mode="aspectFit" class="icon"></image>
      </view>
      <text :class="{ active: currentIndex === index }">
        {{ item.text }}
      </text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabList: [{
          pagePath: "/pages/home/home",
          text: "首页",
          iconPath: "/static/images/tabbar/home.png",
          selectedIconPath: "/static/images/tabbar/home-active.png"
        },
        {
          pagePath: "/pages/shop/shop",
          text: "选好水",
          iconPath: "/static/images/tabbar/shop.png",
          selectedIconPath: "/static/images/tabbar/shop-active.png"
        }, {
          pagePath: "/pages/news/news",
          text: "百科", 
          iconPath: "/static/images/tabbar/news.png",
          selectedIconPath: "/static/images/tabbar/news-active.png"
        },
        {
          pagePath: "/pages/my/my",
          text: "我的",
          iconPath: "/static/images/tabbar/my.png",
          selectedIconPath: "/static/images/tabbar/my-active.png"
        }
      ]
    };
  },

  methods: {
    switchTab(index) {
      // 通过 $emit 通知父组件更新 currentIndex
      this.$emit('update:currentIndex', index);
      // 或者使用自定义事件：this.$emit('tabChange', index);
      
      uni.switchTab({
        url: this.tabList[index].pagePath
      });
      console.log("当前页面", this.tabList[index].pagePath);
    }
  }
};
</script>

<style scoped>
.custom-tabbar {
			position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  /* border-top: 1px solid #e5e5e5; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  box-shadow: 0 0 5px 0px rgba(94,94,94,0.25);
	width: 100%;
	height: 60px;
	
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 5px;
	box-sizing: border-box;
}
.icon-box{
	width: 20px;
height: 20px;
}
.icon {
  width: 20px;
  height: 20px;
  /* margin-bottom: 2px; */
}

.tab-item text {
  font-size: 10px;
  color:#979797;
}

.tab-item.active text {
  color: #333333;
}

.tab-item.active .icon {
  /* 确保图标也高亮 */
  opacity: 1;
}
</style>



