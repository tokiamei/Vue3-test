<template>
  <div class="child">
    <h3>我是子组件</h3>
    {{sum}}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Child',
  async setup() {
    let sum = ref(0)
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sum)
      }, 1000);
    })
  }
}
</script>

<style>
    .child {
    width: 300px;
    padding: 5px;
    background-color: blueviolet;
  }
</style>