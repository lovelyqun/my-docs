### 由于开发人员经验,编码习惯不同,造成维护成本上升,多人同步协助容易出现冲突,产生bug,我们需要对提交的代码做格式校验

##### 1.	现有的vue-cli 自带eslint代码规范控件,只需对其规则进行配置.通过修改vue.config.js 文件内的 lintOnSave 属性为true来设置是否在保存代码的时候进行代码检测,这个一个人编码习惯自行设置.

##### 2.	通过eslint插件进行代码修复,在vue-cli的项目中只需运行vue-cli-service lint 指令即可进行自动代码修复,自动修复有一定风险.

##### 3.	规则包括必须规则,vue推荐规则,通用规则,通过设置error 进行开启规则,设置off关闭规则,设置warn进行规则警告.

##### 4.	以下是现有的规则列表

```javascript
module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    'no-console':  process.env.NODE_ENV === 'production'?'error':'off',
    'no-debugger': process.env.NODE_ENV === 'production'?'error':'off',
    'vue/camelcase': 'off', // 驼峰命名
    'vue/space-infix-ops': 'off',
    'no-unused-vars':'off',
    'no-useless-escape':'off',
    'vue/no-use-v-if-with-v-for':'off',  //v-for,v-if 不能同时用在一个元件上
    'vue/no-parsing-error':'off',
    'vue/no-boolean-default': 'off', // 布尔值属性默认值必须是false
    'vue/max-attributes-per-line': 'off', // 一行一个属性
    'vue/eqeqeq': 'off', // 要用===
    'no-empty':'warn', // 不允许有空的代码段
    'vue/require-v-for-key':'warn', // v-for必须要有key
    'vue/require-default-prop': 'warn',// 组件prop 必须有默认值
    'vue/require-prop-types': 'warn',  //  组件prop 必须有类型
    'vue/valid-v-for':'error',  // v-for 有效检测
    'vue/no-confusing-v-for-v-if': 'error', // v-if 必须在v-for之后 因为v-for 优先级大于v-if
    'no-constant-condition':'error',
    'vue/attribute-hyphenation': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-quotes': 'error',
    'vue/html-self-closing': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/name-property-casing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': 'error',
    'vue/prop-name-casing': 'error',
    'vue/singleline-html-element-content-newline': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/attributes-order': 'error',
    'vue/no-v-html': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/object-curly-spacing': 'error',
    'vue/require-direct-export': 'error',
    'vue/script-indent': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error'
  },
  globals: { // 声明全局变量不需要检测
    "uni": "writable",
    "wx": "writable",
    "_hmt": "writable",
    "BMap": "writable",
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ]
}


```




