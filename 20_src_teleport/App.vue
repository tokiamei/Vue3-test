<template>
  <div class="app">
    <h3>我是 App 组件(祖)</h3>
    <Child/>
  </div>
</template>

<script>
import Child from '@/components/Child'
import { reactive, toRefs, provide } from 'vue'
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