####    console.log({a})
    
    const a = 1
    console.log({a})
    // 结果 {a:1}





####    console.trace()

     const fa = function(){
       console.trace()
     }
      const fb = function(){
       fa()
     }
      const fc = function(){
       fb()
     }
     fc()
    // result  
    // VM136:2 console.trace
    // fa @ VM136:2
    // fb @ VM136:5
    // fc @ VM136:8
    // (anonymous) @ VM136:10