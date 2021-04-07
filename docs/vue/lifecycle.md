# 多个组件的生命周期顺序
## 1.单个组件生命周期执行顺序
***

##### 		从官方文档上我们可以看出单个组件的生命周期顺序
`beforeCreate→created→beforeMount→mounted`
***
## 2. 多个组件的生命周期顺序

#### (1). 父组件与子组件
验证步骤:
首先嵌套三个组件 父组件:p,一级子组件:c,二级子组件:c-c,最终得出以下执行结果        

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020122510474029.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjY1NzY2Ng==,size_16,color_FFFFFF,t_70)
<p >从输出可以总结出<font color=blue>beforeCreate,created,beforeMount</font> 这个三个生命周期是<font color=red>由外到内</font>,<font color=blue>mounted</font> 是<font color=red>由内到外</font></p>
