微信小程序有一个地图插件,但是只有显示地理位置的功能,

如果需要导航等功能就需要打开手机内置的地图APP

1.官方文档:https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html

使用方法
1.定义参数
const latitude=26.0626259
const longitude=119.2544032
const name ='外的集团'

2.在进入地图的地方调用接口

   wx.openLocation({
     latitude,
     longitude,
     name,
     scale: 18
   })

**注意事项:这个接口是按参数名称索引,而不是根据参数顺序,所以参数名是固定的,不允许更改.**
