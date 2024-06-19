#### useState :缓存变量,当变量发生变化时,组件会重新渲染,即函数会重新执行

    import React, { useState } from 'react';
    function AddPoint() {
      const [point, setPoint] = useState(0)
      const addPoint =  ()=>{
      setPoint(point + 1)
      }
      return (
        <div>
          <div>{point}</div>
          <button onClick={addPoint}>加</button>
        </div>
      )
    }

### useCallBack:缓存函数,设置在某个state变化时执行函数,避免重新生成函数,函数又作为其他组件的绑定事件,导致其他组件进行更新

useEffect:副作用,可以设置在某个state变化时执行函数,也可以设置在组件每次更新都触发,也可以设置在组件销毁是回调的函数

useMemo:缓存计算结果,设置在某个state变化时执行计算,避免重复计算
useRef:在组件多次渲染中共享数据,比如你要做一个定时器的开启和关闭功能
useContent:缓存全局变量
