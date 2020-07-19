import { config } from "../../config/config"
import { Theme } from "../../model/theme"

// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    topTheme: null,
  },

  /**
   * Lifecycle function--listening when page load
   * JS 类型的约束
   * 业务逻辑
   * 数据绑定
   * view视图层 业务逻辑层 桥梁 中间层
   * mvc C controller
   * Model, Logic, Service
   * Service, Manager,  
   */
  onLoad: async function (options) {
    //在这里使用 async and await 就不需要 callback function
    const data = await Theme.getHomeLocationA()
    console.log(data)
    this.setData({
      topTheme: data[0]
    })


    // Theme.getHomeLocationA(data => {
    //   this.setData({
    //     topTheme: data[0]
    //   })
    // })
  },

  /**
   * Page event handler function--listening when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})