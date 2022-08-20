<template>
  <div class="child">
    <h3>我是子组件</h3>
  <Son/>
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
    name: 'Child',
    components: { Son }
}
</script>

<style>
    .child {
    height: 200px;
    width: 300px;
    background-color: blueviolet;
  }
</style>