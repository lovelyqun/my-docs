#### 开发一个多月的wisapp的一些想法

##### 感受
1.想摊手
2.BUG改不完

##### 分析
1.历史代码多,经手的人也多
2.代码没有规范,包括变量方法名称,甚至是语法都没有规范
3.各种数据监控,全局变量满天飞
4.各个模块过于耦合

#### 结论
1.先把代码仔细认真看了再去写代码,减少无用功,和bug量
2.要多调试代码,这个项目的业务逻辑复杂且不易于理解,遇到业务不熟悉的多问


### 开发一年wisApp的一些想法

#### 感受
1. 无奈
2. 混乱
3. 低效

#### 分析

1. 架构层面没有分层,在整体架构上虽然有抽象出不少类,但是业务代码和功能代码杂糅在一块,让整个类非常的庞大;一些功能函数就应该以工具函数的方式导入导出;
2. 工具函数没有按模块细分,先在都聚集在publicCommon里面
3. 事件没有统一管理,有的事件在元素上绑定,有的通过js绑定,绑定事件和事件处理没有分开,导致功能和业务非常的混乱,比如mouseKeyUpDown这个就是负责鼠标事件的,但是里面处理了很多拖拽的逻辑
4. 滥用mixin,如果把所有的公共方法都放到一个mixin中会造成维护困难,尽量少用mixin ,如果要用,也要尽量把mixin细分好;
5. 代码没有使用类型规范,一个大型的多人项目,由于团队成员水平习惯不一,所以用ts是非常有必要的;
6. 代码没有考虑升级,依赖包管理混乱,也有不少是直接修改了依赖包的源码,现在导致依赖包版本全部锁死,无法升级;
7. 开发文档匮乏,结构混乱,开发人员不能快速的按模块查看已有的方法或者工具函数,比如新增一个组件,需要配置哪些文件,开发时需要遵循哪些规范;
8. svg 文件管理

