### 前端版本管理规范

#### 分支管理规范

+ 开发新版本 : 从 master 新建分支,分支命名 develop-版本号
+ 修复bug : 从master新建分支,分支命名规则 fix-问题 

### 代码提交规范

#### 提交内容组成: type:subject+body

#### type:提交的类型 **<font color=red>(必须)</font>**
+ feat: 新功能、新特性
+ fix: 修改 bug
+ perf: 更改代码，以提高性能
+ refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
+ docs: 文档修改
+ style: 代码格式修改, 注意不是 css 修改（例如分号修改）
+ test: 测试用例新增、修改
+ build: 影响项目构建或依赖项修改
+ revert: 恢复上一次提交
+ ci: 持续集成相关文件修改
+ chore: 其他修改（不在上述类型中的修改）
+ release: 发布新版本
+ workflow: 工作流相关文件修改   

#### subject:提交的主要内容 **<font color=red>(必须)</font>**

#### body:提交的具体细节 **<font color=blue>(可选)</font>**

#### 实例  
    feat: 新增前端版本管理规范 (分支管理规范,代码提交规范)
    
    fix: 修复发布按钮点击没反应的问题(因为使用了js的新特性,在低版本编译失败,导致点击没反应的问题)
    
    release : 发布v1.0.0 (1.新增发布功能;2.新增报名功能;3.优化首页UI)



