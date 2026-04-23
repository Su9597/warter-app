<template>
  <UniLine />
  <view class="organization-chart">
    <!-- 董事长 -->
    <view class="org-ceo">
      <img src="/static/images/jiagou_1.jpg" class="avatar" />
      <view class="line">
        董事长：王刚
        <view class="org-line org-line-right"></view>
        <view class="org-line org-line-left"></view>

      </view>
    </view>

    <!-- 下属 -->
    <view class="subchart">
      <!-- 运营总监 -->

      <view class="manager">
        <image src="/static/images/jiagou_2.jpg" class="avatar"></image>
        <view class="manager-title">
          <text class="manager-title-name">市场总监: 张晓明</text>
          <text class="manager-title-performance">业绩统计: 1666</text>
          <!-- 小组 -->
          <view class="team">
            <text>运营小组</text>
            <text>策划小组</text>
            <text>设计小组</text>
          </view>
          <view class="manager-line"></view>
        </view>

      </view>

      <view class="manager">
        <image src="/static/images/jiagou_3.jpg" class="avatar"></image>
        <view class="manager-title">
          <text class="manager-title-name">市场总监: 张晓明</text>
          <text class="manager-title-performance">业绩统计: 1666</text>
          <!-- 小组 -->
          <view class="team">
            <text>运营小组</text>
            <text>策划小组</text>
            <text>设计小组</text>
          </view>
          <view class="manager-line"></view>
        </view>

      </view>
    </view>

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

    }
  },
  methods: {

  }
}
</script>

<style scoped>
page {
  padding: 0;
  background-image: url('@/static/images/bgc-login.png');
  /* background-size: 100% auto; */
  /* background-repeat: no-repeat;
  background-position: top center; */
  height: 100vh;
}

/* .organization-chart {
  background-image: url('@/static/images/bgc-login.png');
  background-size: 100% auto; */
/* background-repeat: no-repeat;
  background-position: top center;
} */

.org-ceo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

}

.line {
  position: relative;
  width: 94px;
  height: 24px;
  background: #31BCFF;
  /* margin: auto; */
  line-height: 24px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  margin-top: 8px;
}

.org-line {
  position: absolute;
  width: 240rpx;
  /* 线条长度 */
  height: 2rpx;
  /* 线条粗细 */
  background-color: #31BCFF;

  top: 24px;
  left: 50%;
  transform-origin: 0 0;
  /* 以起点（即中心点）为旋转原点 */
  /* z-index: -1; */
}

.org-line-right {

  transform: translate(0, -50%) rotate(155deg);
  background-color: rgba(49, 188, 255, 0.5);

}

.org-line-left {
  transform: translate(0, -50%) rotate(25deg);
  background-color: rgba(49, 188, 255, 0.5);


}

.organization-chart {
  /* margin-top: 300px; */
  margin: auto;

}

.avatar {
  width: 94px;
  height: 120px;
}

.subchart {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}

.manager {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.manager-title {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  /* width: 50%; */
  z-index: 2;
}

.manager-title-name,
.manager-title-performance {
  background-color: #0DC1B8;
  width: 106px;
  height: 26px;
  font-size: 10px;
  line-height: 26px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  margin-top: 5px;

}

/* .manager-title-name {
  position: relative;

} */

.manager-line {
  position: absolute;
  width: 220px;
  /* 线条长度 */
  height: 2rpx;
  /* 线条粗细 */
  background-color: rgba(151, 151, 151, 0.54);
  transform-origin: 0 0;
  top: 20px;
  left: 50%;
  transform: translate(0, -50%) rotate(90deg);
  z-index: -1;
}

.manager-title-performance {
  background-color: #CAE3E2;
  color: #0DC1B8;
}

.team {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 18px;
}

.team text {
  border: 1px solid #0DC1B8;
  width: 106px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
  color: #333333;
  background-color: #fff;
}
</style>
