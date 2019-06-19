<template>
  <div>
    <h1>{{msg}}</h1>
    <ul>
      <li v-for="item in coursesList">
        <!--<router-link to="/detail">{{item.title}}</router-link>-->
        <router-link :to="{name:'Detail',params:{id:item.id}}">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Courses",
    data() {
      return {
        msg: "课程",
        coursesList: []
      }
    },
    mounted: function () {
      // vue页面加载时自动执行
      this.initCourses()
    },
    methods: {
      initCourses: function () {
        // 通过ajax向接口发送请求，获取课程列表
        // 使用axios发送ajax请求
        // npm install --save axios
        // 第一步：在main.js中配置
        // 第二歩：使用axios发送请求
        let that = this;
        this.$axios.request({
          url: this.$store.state.apiList.courses,
          method: "GET"

        }).then(function (ret) {
          // ajax请求成功后，获取响应的内容 ret.data
          if (ret.data.code === 1000) {
            that.coursesList = ret.data.data;
              // console.log(ret.data.data)
              // console.log(that.$store.state.token)
          } else {
            alert("获取数据失败")
          }
        }).catch(error=>{
          console.log(error)
        })


      }
    }
  }
</script>

<style scoped>

</style>
