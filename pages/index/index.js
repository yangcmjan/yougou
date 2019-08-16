 import request from "../../utils/request.js"

 Page({
   data: {
     //是否自动播放
     autoplay: true,
     //轮播图的对象，是个数组
     imgUrls: [],
     //菜单栏数据
     menus:[]
   },

   onLoad() {

     //请求轮播图数据
     request({
       url: "/home/swiperdata"
     }).then(res => {
       //返回的数组 结构
       const { message } = res.data

      //修改imgUrls
       this.setData({
           imgUrls:message
       })
     });


     //请求菜单栏数据
     request({
       url:"/home/catitems"
     }).then(res=>{
       const { message } = res.data

       this.setData({
         menus:message
       })
     })
   }

    

 })