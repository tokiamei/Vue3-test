<template>
  <div class="app">
    <h3>我是 App 组件(祖) ---{{name}}---{{price}}B</h3>
    <Child/>
  </div>
</template>

<script>
import Child from '@/components/Child'
import { reactive, toRefs, provide } from 'vue'
export default {
  name: 'App',
  components: { Child },
  setup() {
    let car = reactive({ name: 'lamborghini', price: 1 })
    provide('car', car)

    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
  .app {
    height: 300px;
    width: 400px;
    background-color: antiquewhite;
  }
</style>