 import request from "../../utils/request.js"

 Page({
   data: {
     //是否自动播放
     autoplay: true,
     //轮播图的对象，是个数组
     imgUrls: []
   },

   onLoad() {
     request({
       url: "/home/swiperdata"
     }).then(res => {
       //返回的数组 结构
       const { message } = res.data

      //修改imgUrls
       this.setData({
           imgUrls:message
       })
     })
   }


 })