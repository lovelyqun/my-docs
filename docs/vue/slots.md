### 插槽的使用

##### 带有插槽组件定义 article
    <template>
      <div>
        <header>
          <!-- 具名插槽 -->
          <slot name="header" :text="greetingMessage" :count="1"></slot>
        </header>
        <main>
          <!-- 不具名插槽即等价于<slot name="default"></slot> -->
          <!-- 插槽作用域,插槽可以通过插槽作用域让slot能够访问组件数据-->
          <slot :text="greetingMessage" :count="1"></slot>
        </main>
        <footer>
          <!-- 具名插槽 具名插槽的作用域需要通过插槽名称的属性获取 -->
          <slot name="footer">
            {{footer.text}}
          </slot>
        </footer>
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
          greetingMessage:'hello'
        };
      },
    };
    </script>

##### 组件使用

    <article>
      <template #header="{text,count}">
              {{text }} {{count }}
      </template>
      <template v-slot = "slotProps">
        {{ slotProps.text }} {{ slotProps.count }}
      </template>
      <template #footer :text="text">
        我是尾部
      </template>
      <template #[dynamicSlotName]>
        动态插槽 dynamicSlotName 可以是一个变量
      </template>
    </article>
    <script>
      export default {
        data() {
          return {
            text: '我是插槽text',
          };
        },
      };
    </script>
