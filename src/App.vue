<template>
  <!--template中只能存在一个div-->
  <div id="app">
    <!--导航区域-->
    <Header/>

    <!--<router-link to="/index">首页</router-link>-->
    <!--<router-link to="/courses">课程中心</router-link>-->
    <!--<router-link to="/micro">学习中心</router-link>-->
    <!--<router-link to="/study">学习中心</router-link>-->
    <!--<div v-if="this.$store.state.token">-->
      <!--<a href="javascript;">{{this.$store.state.username}}</a>-->
      <!--<a href="javascript;" @click="logout">注销</a>-->
    <!--</div>-->
    <!--<div v-else>-->
      <!--<router-link to="/login">登陆</router-link>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/common/Header'
  export default {
    name: 'App',
    data() {
      return {
        msg: "首页"
      }
    },
    methods: {
      logout() {
        this.$store.commit('clearToken')
      }
    },
    components: {
      Header
    }
  }
</script>

<style scoped>

</style>
