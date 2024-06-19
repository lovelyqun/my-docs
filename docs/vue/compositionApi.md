
# compositionApi

### 为什么要使用组合api?

  1. 解耦合,以前的methods方法里面要用的到的变量需要在data中定义,computed,watch执行的方法又要定义在methods里面,造成多个功能的代码被这种写法分开了,无法清晰快速的看出各个代码块的关系,也不利于纯粹的功能组件封装.
  2. 以上的问题造成代码复用的时候必须使用mixin的方法,mixin的问题本来就有很多,比如重复定义,嵌套引用,且非常不利于代码的阅读.
  3. 所以最佳实践就是把单个功能封装成一个组合函数,可以随意的引入这个函数,这个组合函数要有响应式的功能就必须借助框架提供的一些工具,所以你只要掌握这些特殊的工具函数你就能掌握vue3的新特性了.

### 如何使用组合api?

#### 如何让变量具有响应式?

    <template>
      <div>
        {{ count }}
      </div>
    </template>
    <script>
    // 只要定义在data内就会被标记为响应式变量
    export default {
      data() {
        return {
          count: 0
        }
      }
    }
    </script>

    <script setup>
    // 使用compositionApi
    import { ref } from 'vue'
    const count = ref(0)
    console.log(count.value)
    count.value++
    </script>

#### 如何定义方法

    <template>
      <div @>
        {{ count }}
      </div>
    </template>

#### 使用watch

#### 使用computed

#### 声明生命周期
