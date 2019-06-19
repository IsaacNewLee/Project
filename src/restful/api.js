import Axios from 'axios'

Axios.defaults.baseURL = "https://www.luffycity.com/api/v1/";

// 添加请求拦截器,在发送请求之前执行
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做什么
    if (localStorage.getItem("access_token")) {
      // 在请求头中设置token并发送
      config.headers.Authorization = localStorage.getItem('access_token')
      // Axios.defaults.headers.common["Authorization"] = localStorage.getItem("access_token")
    }
    return config

  },function (error) {
    // 请求错误之后
    return Promise.reject(error)

  }
);

// 滑动验证码api
export const getGeetest = () => {
  return Axios.get('captcha_check/')
    .then(res => res.data)
};

// 登陆api
export const userLogin = (params) => {
  // 这个参数至少包含用户名和密码，以及滑动验证的3个字段
  return Axios.post("account/login/", params)
    .then(res => res.data)
};


// 分类列表api
export const categoryList = () => {
  return Axios.get("course_sub/category/list/")
    .then(res => {  // 可以简写为res=> res.data
      return res.data
    });

};

// 全部列表api：https://www.luffycity.com/api/v1/courses?sub_category=0
export const allCategoryList = (categoryId) => {
  // return Axios.get(`courses?sub_category=${categoryId}&ordering=`)
  return Axios.get(`courses/?sub_category=${categoryId}`)
    .then(res => res.data)
};

// 课程详细页面顶部api：https://www.luffycity.com/api/v1/course/3/top/
export const courseDetailTop = (detailId) => {
  return Axios.get(`course/${detailId}/top/`)
    .then(res => res.data)

};

// 课程常见问题接口 https://www.luffycity.com/api/v1/course/5/questions/
export const commonQuesstion = (detailId) => {
  return Axios.get(`course/${detailId}/questions/`)
    .then(res => res.data)
};

// 获取课程价格信息
export const coursePayment = (detailId) => {
  return Axios.get(`course/${detailId}/payment_info/`)
    .then(res => res.data)

};

// 加入购物车api
export const shoppingCart = (params) => {
  return Axios.post('/user/shop_cart/create/', params)
    .then(res => res.data)

};

// 查看购物车api
export const shoppingCartList = ()=>{
  return Axios.get(`user/shop_cart/list/`)
    .then(res=>res.data)
};




