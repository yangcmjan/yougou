// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //菜单栏
  navs:[
    "电视", 
    "大家电",
    "空调"
  ],
  current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

//菜单栏点击时候触发
  handleChange(event){
  const {index} =event.currentTarget.dataset
  
  this.setData({
    current:index
  })
}

})