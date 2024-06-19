### vscode 代码定义跳转

### 最近被主管吐槽,webstorm都可以直接点击方法跳到定义的文件,为啥vscode不行

### 网上说ts支持,js不可以

### 其实js也可以,之所以跨文件找不到是因为没有建立联系

1. 在项目根目录新建 jsconfig.json

2. 输入配置内容

jsconfig.json


    {
        "compilerOptions": {
            "baseUrl": "./", 
            "paths": {
              "@/*": ["src/*"] //别名:这个根据具体项目配置
            }
        },
        "exclude": [
            "node_modules"
        ]
    }

完成以上两步可以进行js文件定义跳转

3. 如果是需要.vue文件的跳转,需安装插件 [Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek)

