### 小程序运营canvas 绘制海报保存
1.添加canvas标签
    
         <canvas  canvas-id="myCanvas" style="position:absolute;top: -1000px;right: -1000px; width:580rpx; height: 1064rpx;visibility: hidden"/>
    
2.绘制图片
    
        drawImg() {
          const rate = this.pixelRatio
          let ctx = wx.createCanvasContext(`myCanvas`)
          ctx.width = cWidth * rate;
          ctx.height = cHeight * rate;
          ctx.setFillStyle('white')
          ctx.fillRect(0, 0, cWidth, cHeight)
          wx.getImageInfo({
            src: this.companyInfo.headImgUrl, // 头像图片地址
            success: (res) => {
              let img = res
              ctx.drawImage(img.path, 0, 0, img.width, img.height, 16 * rate, 16 * rate, 46 * rate, 46 * rate);
              wx.getImageInfo({
                src: this.detail.coverImgUrl, // 主图地址
                success: (res) => {
                  let img = res
                  ctx.drawImage(img.path, 0, 0, img.width * rate, img.height * rate, 16 * rate, 70 * rate, 258 * rate, 206 * rate);
                  this.canvasToImg(ctx) // 转换成图片
                }
              })
            }
          })
        },

3.canvas转图片

        canvasToImg(ctx){
          let rate = this.pixelRatio
          this.postFinished = true
          uni.hideLoading()
          ctx.draw(true, () => {
            wx.canvasToTempFilePath({
              x: 0, y: 0, width: cWidth* rate, height: cHeight* rate, canvasId: `myCanvas`,
              success:(res)=> {
                console.log('海报临时地址:=',res.tempFilePath)
                this.postTempFilePath = res.tempFilePath
              }
            })
          })
        },
4.保存图片
  
        savePost (){
          this.btnLoading = true
          setTimeout(()=>{
            this.btnLoading = false
          },5000)
          console.log(this.postTempFilePath)
         wx.saveImageToPhotosAlbum({
           filePath:this.postTempFilePath,
           success:(res)=> {
             this.btnLoading = false
             this.$toast('保存成功')
           }
         })
        },
5.利用wx.getImageInfo获取图片信息

### android 与 ios 上的表现上会有差别
    需要乘上分辨率比例,
    在android 上 rate = 375/systemInfo.windowWidth
    在ios 上 rate = systemInfo.windowWidth/375

