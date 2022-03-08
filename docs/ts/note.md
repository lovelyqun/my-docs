###  typescript 学习笔记

typescript的作用是让javascript 这种弱类型语言在编译阶段进行类型检测,规范代码,减少运行时报错的可能;

所以学习ts的方法应该在使用变量或者传参时先考虑他可能是什么类型, 在设计阶段就先考虑好类型,这种思路和以前有很大的不同,这是思路的转换至关重要;

### 类型的声明

#### 1. 基本类型声明

        let str:string
        let num:number
        let boll:boolean   
        let a:any  // 当没想好是哪种类型时可以先用any声明为任何类型
        let sn:string|number // 多种类型使用'|'相连与'||'类似
        function add (a:number,b:number):number{
          return a + b
        }
        // void 表示函数没有返回值
        function print (firstName:string,lastName:string):void {
          console.log(firstName + lastName)
        }

#### 2. 枚举类型声明
通过有意义的字符串映射没有意义的值
用法:通过关键字 enum 声明,一般首字母大写

        enum Color {Red,Green,Blue} // 相当于 enum Color {Red =0,Green =1,Blue=2}
        let c:Color = Color.Green // 1
  
#### 3. 对象声明

        let arr:any[] 
        let arr1:string[]
        let arr2:number|string[]

        let obj:object
        let boj1:{name:string,height:number} // 必须是只含有name,height两个属性且属性值的类型也要匹配
        let boj2:{name:string,height?:number} // 必须含有name属性,可以没有height,如果定义了height属性,必须是number类型
        let boj3:{name:string,height:number,[propName:string]:any} // 必须含有name,height,可以设置其他属性,但是属性的key必须是string

学会以上声明你就可以在项目中使用ts了,但是如果你看别人的项目你会发现,为啥他们的写法还是看不懂,为啥要定义接口interface?

打个比方,如果你要做一个todo-list 项目,你需要对todoItem 进行增删改查,todoItem的类型是 {id:string,text:string,check:boolean}

        let todoList:{id:string,text:string,check:boolean}[] = []

        function addItem(todoItem:{id:string,text:string,check:boolean}):void{
          todoList.push(todoItem)
        }
        function change(todoItem:{id:string,text:string,check:boolean},index:number):void{
           todoList[index].check = true
        }
        function delItem(todoItem:{id:string,text:string,check:boolean},index:number):void{
          todoList.splice(index,1)
        }
这样写的弊端很明显,如果todoItem想要增加或者修改里面的类型就需要将以上三个方法内的定义分别修改,这里我们就需要接口了
用法 :关键字 interface + 名称首字母一般大写

        interface TodoItem {
        id:string,
        text:string,
        check:boolean
        }
        
        let todoList:{TodoItem}[] = []
        
        function addItem(todoItem:TodoItem):void{
          todoList.push(todoItem)
        }
        function change(todoItem:TodoItem,index:number):void{
          todoList[index].check = true
        }
        function delItem(todoItem:TodoItem,index:number):void{
          todoList.splice(index,1)
        }

#### 4. 断言

在开发的过程中你会发现以下问题

        let name:string|number
        let len:number = name.length //这个ts会报错,因如果name是number类型是没有length属性的
        let len:number = (name as string).length // 我们可以告诉ts,这个name在这个地方就是string,不用检测他的类型可能性了

断言的意思就是,开发人员已经经过自己的判断,这肯定是他想要的类型,不需要去检测了.
 
