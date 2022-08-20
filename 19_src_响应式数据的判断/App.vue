<template>
  <div class="app">
    <h3>我是 App 组件(祖) ---{{name}}---{{price}}B</h3>
  </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'
export default {
  name: 'App',
  setup() {
    let car = reactive({ name: 'lamborghini', price: 1 })
    let sum = ref(0)
    let p = readonly(car)

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(p));
    console.log(isProxy(car));
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