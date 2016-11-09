var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.request({
      url: 'http://127.0.0.1:8081/userNew/loginWithPayment', //仅为示例，并非真实的接口地址
      data: {
        phone: '15810257396' ,
        password: 'abcdefg1234567',
        uuid:'869394020750995',
        appv:'4.2.0'
      },
      // header: {
      //     'Content-Type': 'application/json'
      // },
      success: function(res) {
        console.log(res.data.data)
      },
      fail: function(res){
        console.log(res.data);
      }
  })
  },


  onLoad: function () {
    console.log('onLoad.......')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })

      that.bindViewTap()
    })
  }
})