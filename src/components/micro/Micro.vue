<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Micro",
    data() {
      return {
        msg: "微课程",
        microList: []
      }
    },
    mounted: function () {
      this.initMicro()

    },
    methods: {
      initMicro() {
        let that = this;
        this.$axios.request({
          url: this.$store.state.apiList.micro,
          method: "GET"
        }).then(function (ret) {
          if (ret.data.code === 1000) {
            that.microList = ret.data.data
          } else {
            alert("获取失败")

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
