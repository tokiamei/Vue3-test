<template>
  <h1>Demo 组件：求和</h1>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点击++⚔️⚔️⚔️</button>
  <hr>
  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg+='🤡'">点击添加小丑</button>
  <hr>
  <h2>名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="person.name+='👹'">点击改名字</button>
  <button @click="person.age++">点击改年龄</button>
</template>

<script>
import { ref, watch, reactive } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊🍟🍔🍳')
    const person = ref({ name: '李星云', age: 19 })

    // console.log(sum, '😶‍🌫️😶‍🌫️😶‍🌫️', msg, '😶‍🌫️😶‍🌫️', person);

    /* 用 ref 构造的对象，必须 .value，不然检测的就是地址 */
    watch(person.value, () => {
        console.log('person 改变了');
    })
    return {
      sum,
      msg,
      person
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
