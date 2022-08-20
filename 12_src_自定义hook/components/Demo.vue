<template>
  <h1>Demo 组件：求和</h1>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点击++⚔️⚔️⚔️</button>
  <hr>
  <h2>当前点击时鼠标的坐标：x：{{point.x}} | y：{{point.y}}</h2>
</template>

<script>
import { ref } from 'vue'
import usePoint from '@/hooks/usePoint'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)

    let point = usePoint()
    // console.log(typeof x, y);
    
    return {
      sum,
      point
    }  
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
