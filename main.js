import App from './App';

// import UniUI from '@dcloudio/uni-ui';

// #ifndef VUE3
import Vue from 'vue';


// main.js，注意要在use方法之后执行
import uviewPlus, { setConfig } from 'uview-plus';
app.use(uviewPlus);


import './uni.promisify.adaptor';
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
    ...App,
});
app.$mount();
    // #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';


export function createApp() {
    const app = createSSRApp(App);
        // 注册 uni-ui 组件
    // app.use(UniUI)
    return {
        app,
    };
}

// #endif
