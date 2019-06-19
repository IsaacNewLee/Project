<template>
    <div>
      <FreeCourseDetailTop />
      <p v-for="item in questionData">{{item.question}}:{{item.answer}}</p>
        <router-view/>

    </div>
</template>

<script>
  import FreeCourseDetailTop from "./FreeCourseDetailTop"
    export default {
        name: "Question",
        data(){
          return{
            questionData:[]

          }
        },
      components:{
          FreeCourseDetailTop
      },
        created() {
          this.$api.commonQuesstion(this.$route.params.detailId)
            .then(res=>{
              if (!res.error_no){
                this.questionData = res.data
              }
            })
            .catch(error=>{
              console.log(error)
            })
        }

    }
</script>

<style scoped>

</style>
