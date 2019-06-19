<template>
  <div id="freecourse">
    <div class="container clearfix">
      <ul class="coursebox ">
        <li v-for="(item,index) in categoryList" :key="item.id"
            :class="{active:index === currentIndex}" @click="indexHandler(index,item.id)">
          {{item.name}}
        </li>
      </ul>


      <div class="courseList">
        <div class="detail" v-for='(course,index) in allCategoryList' :key='course.id'
             @click='detailHandler(course.id)'>
          <div class="head">
            <img :src="course.course_img" alt="" class="backImg">
            <b class="mask" :style='{background:course.bgColor}'></b>

          </div>
          <div class="content">
            <p v-for="(section,index) in course.free_sections" :key="section.id">
              {{index}}|{{section.name}}
            </p>
            <div class="content-detail">
              <div>
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTF
                  weCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTEgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL
                  zIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2t
                  ldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZ
                  TwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJ
                  SZWN0YW5nbGUtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgd
                  HJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3LjAwMDAwMCwgLTkxLjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSLkuKrkurrkuK3lv4MiIHR
                  yYW5zZm9ybT0idHJhbnNsYXRlKDE3LjAwMDAwMCwgOTEuMDAwMDAwKSIgZmlsbD0iIzlCOUI5QiIgZmlsbC1ydWxlPSJub256ZXJvI
                  j4KICAgICAgICAgICAgPHBhdGggZD0iTTYuNzU4MjMwODEsNi42MjU2MzEwOCBMNC4yNDEzMzM5Miw2LjYyNTYzMTA4IEMxLjkwMjM
                  xNTc1LDYuNjI1NjMxMDggMCw4LjQxNDM0Nzg0IDAsMTAuNjEzNjY4OSBMMCwxMC44NTAyOTE3IEMwLDEyIDEuODcxODkwNjUsMTIgN
                  C4yNDEzMzM5MiwxMiBMNi43NTgyNDUzMiwxMiBDOS4wMzQ0NTQ2MSwxMiAxMSwxMiAxMSwxMC44NTAyOTE3IEwxMSwxMC42MTM2Njg
                  5IEMxMSw4LjQxNDc3MDM2IDkuMDk3MTkwOTUsNi42MjU2MzEwOCA2Ljc1ODIzMDgxLDYuNjI1NjMxMDggWiBNNS4zNzQwNDEyNiw2L
                  jMyMTI0MjAyIEM3LjIyNjIxNDM2LDYuMzIxMjQyMDIgOC43MzMxOTI0Nyw0LjkwMzU2Mjg4IDguNzMzMTkyNDcsMy4xNjA2Mjc4MiB
                  DOC43MzMxOTI0NywxLjQxNzc3NDU0IDcuMjI2MjE0MzYsMCA1LjM3NDA0MTI2LDAgQzMuNTIxOTI2MiwwIDIuMDE0ODAzLDEuNDE4M
                  Dc0MzkgMi4wMTQ4MDMsMy4xNjA2OTU5NyBDMi4wMTQ4MDMsNC45MDMxODEyNSAzLjUyMTkyNjIsNi4zMjEyNDIwMiA1LjM3NDA0MTI
                  2LDYuMzIxMjQyMDIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                  alt="">
                <span>{{course.learn_number}}</span>


                <span class="span3">
                  <span class="s">原价：{{course.price}}</span>
                  <span class="t">{{course.promotion_name}}:{{course.promotion_price}}</span>
                </span>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "FreeCourse",
    data() {
      return {
        msg: "免费课程",
        categoryList: [],
        currentIndex: 0, // 分类列表选中
        categoryId: 0,
        allCategoryList: [], //全部课程列表
        freeSection: [], //课程章节部分
      }
    },
    methods: {

      indexHandler(index,id) {
        this.currentIndex = index;
        this.categoryId = id;           // 修改categoryId，闯入url实现分类切换
        this.getAllCategoryList();      // 获取categoryId对应的分类课程
      },
      // 获取分类列表
      getCategoryList() {
        this.$api.categoryList()
          .then(res => {
            // console.log(res);
            if (!res.error_no) {
              this.categoryList = res.data;
              let category = {
                id: 0,
                category: 0,
                name: "全部"
              };
              this.categoryList.unshift(category)
            }
          })
          .catch(error => {
            console.log(error)
          })

      },

      // 获取全部分类课程列表，categoryId为0时现实全部
      getAllCategoryList() {
        this.$api.allCategoryList(this.categoryId)
          .then(res => {
            if (!res.error_no) {
              this.allCategoryList = res.data;

              // console.log(res.data,)
            }
          })
          .catch(error => {
            console.log(error)
          })

      },

      // 获取课程详细
      detailHandler(id){
        // div点击时路由不会改变，使用编程式导航
        this.$router.push({
          name:"courseDetail",
          params:{
            detailId:id
          }
        })
      }
    },
    created() {
      // 组件创建时自动执行
      this.getCategoryList();
      this.getAllCategoryList()

    },

  }
</script>

<style lang="css" scoped>
  .course {
    width: 100%;
    height: 1000px;
    background: #f3f3f3;
  }

  .coursebox {
    padding: 24px 0;
    font-size: 16px;
    color: #666;
    letter-spacing: .41px;
    overflow: hidden;
  }

  ul li {
    float: left;
    margin-right: 24px;
    cursor: pointer;
  }

  ul li.active {
    color: #00b4e4;
  }

  .courseList {
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .detail {
    float: left;
    width: 452px;
    height: auto;
    margin-right: 16px;
    margin-bottom: 30px;
    position: relative;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 2px 6px 0 #e8e8e8;
    transition: all .2s linear;
    cursor: pointer;
  }

  .detail:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, .15);
    transform: translate3d(0, -3px, 0);
  }

  .detail:nth-of-type(4n) {
    margin-right: 0;
  }

  .head {
    width: 100%;

    height: 144px;
  }

  .detail .head img {
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .detail .head b {
    width: 100%;
    height: 144px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: .9;
  }

  .detail .head p {
    position: absolute;
    width: 248px;
    height: 144px;
    left: 0;
    top: 0;
    text-align: center;
    font-size: 24px;
    color: #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-around;
  }

  .content {
    width: 800px;

    height: 300px;
    padding-top: 30px;

  }

  .content p {
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    letter-spacing: .6px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .content-detail {
    width: 50%;
    height: 40px;
    line-height: 40px;
    position: relative;

  }

  .content-detail .span3 {
    position: absolute;
    right: 0;

  }

  .content-detail .span3 .s {
    text-decoration: line-through;
  }

  .content-detail .span4 {
    /*margin-left: 100px;*/
    position: absolute;
    right: 0;
    color: #FC0107;
  }

  .content-detail .span3 .t {
    color: #000;
    margin-left: 5px;
    text-decoration: none !important;
    color: #FC0107;
  }

</style>
