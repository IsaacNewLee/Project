import Vue from 'Vue'
import Vuex from 'Vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  // 通过this.$store.state.username调用
  state: {
    userInfo:{},

    username: Cookie.get('username'),
    token: Cookie.get('token'),
    apiList: {
      courses: "http://127.0.0.1:8000/api/v1/courses/",
      detail: "http://127.0.0.1:8000/api/v1/courses/",
      login: "http://127.0.0.1:8000/api/v1/login/",
      micro: "http://127.0.0.1:8000/api/v1/micro/"
    }
  },

  mutations: {
    // 通过this.$store.commit(‘函数名’， 参数调用)
    saveToken: function (state, userToken) {
      state.username = userToken.username;
      state.token = userToken.token;
      Cookie.set('username', userToken.username, '20min');
      Cookie.set('token', userToken.token, '20min')

    },
    clearToken: function (state) {
      state.username = null;
      state.token = null;
      Cookie.remove('username');
      Cookie.remove('token')
    },


    getUserInfo(state, userInfo){
      state.userInfo=userInfo
    }
  },

  actions:{
    getUserInfo({commit}, userInfo){
      commit('getUserInfo', userInfo)
    }
  },

})
