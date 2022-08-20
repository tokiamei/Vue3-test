<template>
  <div class="app">
    <h3>我是 App 组件(祖)</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <h3>Loading...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
/* 
  这叫静态引入
*/
// import Child from '@/components/Child'
/* 
  动态引入【也叫 异步引入】
*/
import { defineAsyncComponent, ref } from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child'))
export default {
  name: 'App',
  components: { Child },
}
</script>

<style>
  .app {
    width: 400px;
    padding: 5px;
    background-color: antiquewhite;
  }
</style>