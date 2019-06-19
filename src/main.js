// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'

// element-ui导入
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用全局css样式
import '../static/global/global.css'
import '../static/global/gt.js'

// 调用element插件
Vue.use(Element);


// 在vue全局变量中设置了$axios=axios
// 以后每个组件使用时:this.$axios
Vue.prototype.$axios = axios;
// 设置公共url，以后只需要拼接后面的url即可
// axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";


import * as api from "./restful/api"
Vue.prototype.$api = api;


// 在全局变量中设置$store = store，使用this.$store调用
Vue.prototype.$store = store;



// 路由的全局守卫,必须放在Vue实例挂载的代码之前
router.beforeEach((to, from, next)=> {
  // console.log(to)
  // console.log(from  )

  if (localStorage.getItem("access_token")){
      // 如有access_token存在，这表明用户登入过
      let userInfo = {
        access_token : localStorage.getItem("access_token"),
        username : localStorage.getItem("username"),
        shop_cart_num : localStorage.getItem("shop_cart_num"),
        avatar : localStorage.getItem("avatar"),
        notice_num : localStorage.getItem("notice_num"),
      };
      store.dispatch("getUserInfo", userInfo);
      next()
    }else {

  }


  // if (to.meta.requireAuth){
  //   // 如果认证标识为true，那么登陆成功才能访问
  //   if (localStorage.getItem("access_token")){
  //     // 如有access_token存在，这表明用户登入过
  //     next()
  //   }else {
  //     next({name:'Login',
  //     // 将想要访问to的url传给login
  //     query: {backUrl:to.fullPath}})
  //   }
  next()
});




Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});



