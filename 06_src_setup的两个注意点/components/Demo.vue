<template>
  <h1>我是 Demo 组件</h1>
  <h2>我是：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="handleSayHello">点击给 App 发消息</button>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'
export default {
  name: 'Demo',
//#region  
//   beforeCreate() {
//     console.log('*********** beforeCreate 执行了', '慢了' + (Date.now() - this.time) + 'ms');
//   },
//#region
  props: ['msg', 'school'],
  emits: ['hello'],
  setup(props, context) {
    // let time = ref(Date.now())

    
    // console.log('######## setup 执行了', props);
    console.log('######## setup 执行了', context.slots);
    const person = reactive({
      name: '混沌魔军索伦森',
      age: 20000,
    })

    function handleSayHello() {
        context.emit('hello', person.name)
    }

    return {
      person,
      handleSayHello
    //   time
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
