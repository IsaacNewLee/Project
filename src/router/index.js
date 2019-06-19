import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/home/Index'
import Courses from "../components/course/Courses";
import Micro from "../components/micro/Micro";
import Study from "../components/study/Study";
import Detail from "../components/course/Detail";
import Login from "../components/login/Login";
import LightCourse from "@/components/light_course/LihgtCourse"
import FreeCourse from "@/components/course/FreeCourse"
import FreeCourseDetail from "@/components/course/FreeCourseDetail";
import Question from "@/components/course/Question";
import FreeCourseDetailTop from "@/components/course/FreeCourseDetailTop";
import ShoppingCart from "@/components/Shopping/ShoppingCart";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Index
    },
    {
      path: '/',
      component: Index
    },
    {
      path: '/freecourses',
      name: 'FreeCourse',
      component: FreeCourse
    },
    {
      path: '/courses',
      name: 'Course',
      component: Courses
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, 
    {
      path: '/lightcourse',
      name: 'LightCourse',
      component: LightCourse
    },
    {
      path: '/micro',
      name: 'Micro',
      component: Micro,
      // 添加一个标识，用于前端用户认证
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/study',
      name: 'Study',
      component: Study
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 课程详细页面
      name:"courseDetail",
      path:"/course/:detailId/details-introduce/",
      component:FreeCourseDetail
    },

    {
      // 常见问题
      name:"question",
      path:"/course/:detailId/common-problems/",
      component:Question
    },
    {
      name:"FreeCourseDetailTop",
      path:"/course/:detailId/common-problems/",
      component:FreeCourseDetailTop
    },
    {
      name:"ShoppingCart",
      path:"/shopping-cart",
      component:ShoppingCart
    }


  ],
  mode: 'history',
  linkActiveClass:"is-active"
})
