### NPM指令说明
##### npm init  初始化项目
##### npm install packageName@version    -*
##### npm update 更新包版本
##### npm cache clean -f 强制清除缓存
+ 默认值为 --save
+ --global，缩写为-g，表示安装包时，视作全局的包。安装之后的包将位于系统预设的目录之下
+ --save，缩写为-S，表示安装的包将写入package.json里面的dependencies。
+ --save-dev，缩写为-D，表示将安装的包将写入packege.json里面的devDependencies。


####package.json 参数说明
***
##### 依赖版本号规则
1. version
    必须匹配某个版本
    如：1.1.2，表示必须依赖1.1.2版
2.  \>version
  必须大于某个版本
  如：>1.1.2，表示必须大于1.1.2版
3. ~version
   大概匹配某个版本
   如：~1.1.2，表示>=1.1.2 <1.2.0，可以是1.1.2，1.1.3，1.1.4，.....，1.1.n
4. ^version
    兼容某个版本
    版本号中最左边的非0数字的右侧可以任意,如果缺少某个版本号，则这个版本号的位置可以任意
    如：^1.1.2 ，表示>=1.1.2 <2.0.0，可以是1.1.2，1.1.3，.....，1.1.n，1.2.n，.....，1.n.n

***
#### main：
代码入口。这个十分重要，特别是对于组件库。当你想在node_modules中修改你使用的某个组件库的代码时，首先在node_modules中找到这个组件库，第一眼就是要看这个main，找到组件库的入口文件。在这个入口文件中再去修改代码.
#### scripts：
指定了运行脚本命令的npm命令行缩写。
#### files：
数组,表示代码包下载安装完成时包括的所有文件。
#### dependencies：
项目的依赖。通过npm install --save安装的包会出现在这里.
#### devDependencies:
项目的依赖。通过npm run install --save-dev安装的包会出现在这里.