###  web常见攻击手段

####  XSS   Cross Site Scripting  为了与“CSS”区分开来，故简称XSS，翻译过来就是“跨站脚本”

      1. 存储型

      ⾸先⿊客利⽤站点漏洞将⼀段恶意JavaScript代码提交到⽹站的数据库中；
        然后⽤⼾向⽹站请求包含了恶意JavaScript脚本的⻚⾯； 
        当⽤⼾浏览该⻚⾯的时候，恶意脚本就会将⽤⼾的Cookie信息等数据上传到服务器。

        eg:文章的标题输入<script>alert(1)</script> ---> 存入服务器 --->用户查看文章就会加载这个脚本

        解决方案:服务器脚本过滤

      2. 反射型
      
      首先服务端有一个接口的功能是把请求参数返回给前端页面显示(直接返回,不存储数据库)
      与存储型的区别就是是否存到数据库

      解决方案:服务器脚本过滤

      3. dom注入

      ⽐如通过⽹络劫持在⻚⾯传输过程中修改HTML⻚⾯的内容
      这种劫持类型很多，有通过WiFi路由器 劫持的，有通过本地恶意软件来劫持的，它们的共同点是在Web资源传输过程或者在⽤⼾使⽤⻚⾯的过程中 修改Web⻚⾯的数据。

      通常服务器可以将某些Cookie设置为HttpOnly标志,这样⽆法通过 document.cookie是来读取关键信息



#### CSRF Cross Site Request Forgery  跨站伪造请求

    场景:
    用户已登录A网站http://A.com-->引诱用户点击链接-->链接内通过资源地址,form表单的方式发起http://A.com/getMoney?num=200
    根据同源策略,发起这个请求时会自动携带cookie信息

    解决方案:
    1. 利⽤好Cookie 的 SameSite 属性
        SameSite = Strict，那么浏览器会完全禁⽌第三⽅ Cookie;
        SameSite = Lax从第三⽅站点的链接打开和从第三⽅站点提交Get⽅式的表单这 两种⽅式都会携带Cookie。但如果在第三⽅站点中使⽤Post⽅法，或者通过img、iframe等标签加载的 URL，这些场景都不会携带Cookie;
        SameSite = None的话，在任何情况下都会发送Cookie;
        
    2. CSRF Token
        通过程序在请求头设置一个登录凭证的字段,比如 Authorization
        Authorization 的值为在登录成功后返回的token 
                 