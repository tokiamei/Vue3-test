<template>
  <div class="son">
    <h3>我是孙组件 ---{{name}}---{{price}}</h3>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue'
export default {
    name: 'Son',
    setup() {
      let car = inject('car')
      console.log(car);
      return {
        ...toRefs(car)
      }
    }
}
</script>

<style>
    .son {
    height: 100px;
    width: 200px;
    background-color: chartreuse;
  }
</style>