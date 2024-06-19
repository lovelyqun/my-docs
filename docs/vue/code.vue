<!-- 定义变量 -->
<template>
  <div>
    {{ count }}
  </div>
</template>
<!-- 使用组合式API -->
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
<!-- 使用compositionApi -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>


<!-- 定义方法 -->
<template>
  <button @click="add">加1</button>
  <div>
    {{ count }}
  </div>
</template>
<!-- 使用组合式API -->
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    }
  }
}
</script>
<!-- 使用compositionApi -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
const add = () => {
  count.value++
}
</script>


<!-- 使用watch -->
<template>
  <button @click="add">加1</button>
  <div>
    {{ count }}
  </div>
</template>
<!-- 使用组合式API -->
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    }
  },
  watch: {
    count(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>
<!-- 使用compositionApi -->
<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const add = () => {
  count.value++
}

watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
</script>

<!-- 使用computed -->
<template>
  <button @click="add">加1</button>
  <div>
    {{ twiceTheCount }}
  </div>
</template>
<!-- 使用组合式API -->
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
    }
  },
  watch: {
    count(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  computed: {
    count() {
      return this.count + 1
    }
  }
}
</script>
<!-- 使用compositionApi -->
<script setup>
import { ref, computed } from 'vue'
const count = ref(0)
const add = () => {
  count.value++
}
watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
const twiceTheCount = computed(() => count.value * 2)
</script>

<!-- 使用生命周期函数 -->
