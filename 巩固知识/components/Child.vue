<template>
  <div class="child">
    <h3>我是子组件</h3>
  </div>
  <Son/>
</template>

<script>
import Son from './Son.vue'
export default {
    name: 'Child',
    components: { Son }
}
</script>