<template>
  <div>
    <p>{{detail.name}}</p>
    <p>{{detail.level}}</p>
    <p>{{detail.video_brief_link}}</p>
    <p>{{detail.what_to_study_brief}}</p>
    <p>{{detail.why_study}}</p>
    <img :src="imgUrl" alt=" ">

    <div>
      <ul v-for="item in detail.teachers">
        <li>{{item.name}}</li>
      </ul>
    </div>
    <div>
      <ul v-for="item in detail.chapters">
        <li>{{item.name}}</li>
      </ul>
    </div>

    <div>
      <ul v-for="item in detail.recommend_courses">
        <li @click="recommendDetail(item.id)"><a href="javascript:">推荐课程：{{item.title}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        detail: {
          name: null,
          img: null,
          teachers: null,
          level: null,
          video_brief_link: null,
          what_to_study_brief: null,
          why_study: null,
          chapters: [],
          recommend_courses: []
        },
        imgUrl:''

      }
    },
    mounted() {
      let nid = this.$route.params.id;
      this.initCourseDetail(nid);
    },
    methods: {
      initCourseDetail(nid) {
        let that = this;
        this.$axios.request({
          url: this.$store.state.apiList.detail + nid + '/',
          method: 'GET'
        }).then(function (ret) {
          if (ret.data.code === 1000) {

            that.detail = ret.data.data;
            that.imgUrl = "http://127.0.0.1:8000/media/" + ret.data.data.img;

            console.log(ret.data.data)
          } else {
            that.detail = ret.data.error
          }
        })
      },
      // 推荐课程的点击事件，显示推荐课程的详细信息
      recommendDetail(id) {
        this.initCourseDetail(id);  // 重新渲染页面的课程详细信息
        this.$router.push({name: 'Detail', params: {id: id}}) // 重定向url
      }
    }
  }
</script>

<style scoped>

</style>
