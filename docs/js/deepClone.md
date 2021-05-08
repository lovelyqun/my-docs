#### 深拷贝

    //判断是否是数组
    function isArray(arr){
      return Object.prototype.toString.call(arr)==='[object Array]'
    }
    // 深度拷贝
    function deepClone(obj){
      if([null,undefined,NaN,false].includes(obj)){ return obj}
      if(typeof obj !=='object' && typeof obj!=='function'){return obj}
      let o = isArray(obj)?[]:{}
      for(k in obj){
        if(obj.hasOwnProperty(k)){
          o[i]=typeof obj[i]==='object'?deepClone(obj[k]):obj[k]       
           }
      }
    }