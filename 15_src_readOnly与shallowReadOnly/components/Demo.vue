<template>
  <h1>Demo 组件：求和</h1>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点击++⚔️⚔️⚔️</button>
  <hr>
  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg+='🤡'">点击添加小丑</button>
  <hr>
  <h2>名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>职业：{{job.place}}</h2>
  <button @click="name+='👹'">点击改名字</button>
  <button @click="age++">点击改年龄</button>
  <button @click="job.place+='🍳'">点击改职业</button>
  <hr>
</template>

<script>
import { ref, toRefs, reactive, readonly, shallowReadonly } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊🍟🍔🍳')
    // const person = readonly(reactive({ name: '李星云', age: 19, job: { place: '江湖' } }))
    let person = reactive({ name: '李星云', age: 19, job: { place: '江湖' } })

    person = readonly(person)

    return {
      sum,
      msg,
      ...toRefs(person),
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
