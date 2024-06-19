### svg  样式相互影响的问题

#### 发现问题 
在使用多个svg图片的过程中发现,单独引用一个svg样式是正常的
但是使用多个svg后发现样式不符合预期

#### 分析问题

      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs><style>.a{fill:#fff;opacity:0;}.b{fill:#f4f4f4;}.c{fill:#333;}.d{fill:#b0b0b0;}</style></defs><g transform="translate(369 -278) rotate(90)"><rect class="a" width="14" height="14" transform="translate(278 355)"/><rect class="b" width="12" height="12" transform="translate(279 356)"/><g transform="translate(14.938 -4)"><path class="c" d="M-4149.938-433v-1h12v1Zm5.45-2.392v-5.5l-1.889,1.889a.55.55,0,0,1-.778,0,.548.548,0,0,1,0-.778l2.829-2.829a.549.549,0,0,1,.777,0l2.83,2.829a.55.55,0,0,1,0,.778.55.55,0,0,1-.778,0l-1.89-1.889v5.5a.548.548,0,0,1-.162.388.545.545,0,0,1-.389.161A.551.551,0,0,1-4144.488-435.393Z" transform="translate(4414 805)"/><rect class="d" width="12" height="1" transform="translate(264.062 360)"/></g></g></svg>

查看每个svg图片的代码,发现受影响的svg图片都有<style><style>.a{fill:#fff;opacity:0;}.b{fill:#f4f4f4;}.c{fill:#333;}.d{fill:#b0b0b0;}</style>元素,查阅文档发现,这里的"style"标签的作用和在html里面一样,也就是说,这个样式对全局生效

#### 解决问题

1. 重构class 名称

2. 将svg做成一个组件,通过组件命名空间做隔离

#### 扩展

mask 标签也可能会相互影响



