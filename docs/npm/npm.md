### npm 入门

此处默认你已安装好node环境

    npm init 

运行npm初始化会生成一个package.json 文件

    {
      "name": "demo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js", //代码入口
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1" //指定了运行脚本命令的npm命令行缩写
      },
      "author": "",
      "license": "ISC"
    }

安装依赖

      npm install lodash // 所有环境都要用的依赖 
      npm install webpack -D // 开发环境需要的依赖
      npm install css-loader@6.2.0 -D // 指定安装包的版本号
      npm install yarn -g // 全局安装, 运行后会在npm的全局目录下安装对应依赖并生成依赖关系,可通过npm config get prefix 指令查看全局目录

package.json 文件会多出一个依赖配置,node_module里也会安装上对应的依赖

    {
    ********
      "dependencies": {
        "loadsh": "^0.0.4"
      },
      "devDependencies": {
        "webpack": "^5.70.0",
        "css-loader": "^6.2.0"
      }
    }

卸载依赖

    npm uninstall lodash   // 卸载后package.json也会做对应的删除

更新依赖

    npm update  包名

清除缓存

    npm cache clean -f

  如果你的npm版本大于3 ,可以看到另外一个文件

  package-lock.json

在这个文件夹内你会发现除了有自己手动安装的包信息,还有一些是自动安装的包

这个文件夹有什么用?其他包又是什么东西呢?参考下篇文章,npm install 做了什么