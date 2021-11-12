### 记一次element-ui源码修改

需求:el-tree在拖拽的时候会自动处理树的数据以达到拖拽的效果.但是我需要对拖拽的数据做自定义的处理,所以需要屏蔽数据处理功能

***
1. 先找到node_modules>elelment-ui>lib>tree.js 直接修改代码,会生效,需求搞定
但是有一个疑惑,为什么这个文件夹的格式这么奇怪,也不易阅读,同样package/tree.vue里的文件却更符合平时写的组件规范.但是修改文件,并不生效.
以前修改uniapp的i-view框架的组件并没有遇到类似情况,i-view修改源文件直接生效
2. 找到源码package.json文件,main字段为import 的查找入口
element-ui>main:lib/element-ui.common.js
i-view>main:index.js
3. 继续探索,发现element-ui源码没有lib文件夹,lib是打包后生成的文件,package是源码文件
4. 继续发问,为什么element-ui需要用打包后的文件

***
### 记一次颜色选择器vue-color源码修改

需求:修改颜色选择器vue-color的布局及样式

***
1. 运行 npm install vue-color 
2. 找到package.json 里面的main字段,找到入口文件 'dist/vue-color.min.js"
3. 'dist/vue-color.min.js'文件为压缩混淆过的js,不能直接修改
4. 这个文件是怎么来的?
5. 找到package.json 里面的script字段,找到打包指令 release
6. 知道打包指令后就可以修改对应的源码,然后运行打包指令生成新的vue-color.min.j

***
### 思考
源码修改后的源文件要以什么形式保存呢?
1. 直接修改项目下的node_modules/vue-color相关文件
这样做的问题是,一般我们node_modules是不会提交到代码库,当其他人install 的时候就只会拿到npm上的文件
2. 把整个vue-color 复制到项目中,提交到代码库
这样做的问题也很明显,造成项目很大,本来只需要引用打包后的文件,现在把源码也提交上去
3. 发布私有npm包
这样做的成本比较高,需要搭建私有npm库
4. patch-package是一个用来给其他npm包打补丁的包，实际原理也是在本工程保存一份修改的代码，只不过不是用全量代码的形式保存，而是保存了git diff的结果，节省了代码体积
用法如下：

npm i -S patch-package安装patch-package
直接在node_modules下修改需要修改的包源码
执行npx patch-package 包名, patch-package会将当前node_modules下的源码与原始源码进行git diff，并在项目根目录下生成一个patch补丁文件
后续只要执行npx patch-package命令，就会把项目patches目录下的补丁应用到node_modules的对应包中，这个执行时机一般可以设置为postinstall这个勾子

"scripts": {
    "postinstall": "patch-package"
}



