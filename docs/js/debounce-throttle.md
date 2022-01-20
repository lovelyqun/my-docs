#### 防抖
+ 原理:在事件触发的n秒后再执行,如果在这期间再次触发则重新计时
+ 适用场景:
                  1.按钮提交场景：防止多次提交按钮，只执行最后提交的一次
                  2.搜索框联想场景：防止联想发送请求，只发送最后一次输入

+ 精简版
     
      function debounce(func,wait=500){
        let timeout = null
        return function(){
          const context = this
          const args = arguments
          clearTimeout(timeout)
          timeout = setTimeout(function(){
            func.apply(context,args)
          },wait)
        }
      }
    
    
#### 节流

+ 原理:在单位时间内只触发一次,如果在此期间触发多次,只有第一次是生效的
+ 适用场景: 拖拽,窗口变化,滚动事件等


        function throttle(func,await=500) {
          let timeout = null
          return function(){
            const context = this
            const args = arguments
            if(!timeout){
              setTimeout(function(){
                func.apply(context,args)
              }){}
            }
          }
        }