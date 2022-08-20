<template>
  <h1>Demo 组件：求和</h1>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点击++⚔️⚔️⚔️</button>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    console.log('-----setup-----');
    /* 
        用组合式 API 去使用生命周期钩子
    */
    onBeforeMount(() => {
        console.log('-----onBeforeMount-----');
    })
    onMounted(() => {
        console.log('-----onMounted-----');
    })
    onUnmounted(() => {
        console.log('-----onUnmounted-----');
    })
    onBeforeUpdate(() => {
        console.log('-----onBeforeUpdate-----');
    })
    onUpdated(() => {
        console.log('-----onUpdated-----');
    })
    onBeforeUnmount(() => {
        console.log('-----onBeforeUnmount-----');
    })
    onUnmounted(() => {
        console.log('-----onUnmounted-----');
    })

    return {
      sum
    }  

  },
  //#region 
  // 通过配置项的形式使用生命周期函数
  /* beforeCreate() {
    console.log('=====beforeCreate=====');
  },
  created() {
    console.log('=====created=====');
  },
  beforeMount() {
    console.log('=====beforeMount=====');
  },
  mounted() {
    console.log('=====mounted=====');
  },
  beforeUpdate() {
    console.log('=====beforeUpdate=====');
  },
  updated() {
    console.log('=====updated=====');
  },
  beforeUnmount() {
    console.log('=====beforeUnmount=====');
  },
  unmounted() {
    console.log('=====unmounted=====');
  } */
  //#endregion
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
