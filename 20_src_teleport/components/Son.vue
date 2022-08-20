<template>
  <div class="son">
    <h3>我是孙组件</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
    name: 'Son',
    components: { Dialog }
}
</script>

<style>
    .son {
      width: 200px;
      padding: 5px;
      background-color: chartreuse;
  }
</style>