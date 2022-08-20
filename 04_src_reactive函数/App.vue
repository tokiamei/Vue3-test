<template>
<!-- 模板中不需要去 .value -->
  <h1>我是 App 组件</h1>
  <h2>我是：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>工作类型：{{person.job.type}}</h2>
  <h2>薪水：{{person.job.salary}}</h2>
  <h2>爱好：{{person.job.hobby.play}}</h2>
  <button @click='changeInfo'>点击更换信息</button>
  <hr>
  <h2>{{person.job.underlying[0]}}</h2>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'App',
  setup() {

    const person = reactive({
      name: '混沌魔军索伦森',
      age: 20000,
      job: {
        type: '黑暗教父',
        salary: '30K',
        hobby: {
          play: '打麻将'
        },
        underlying: ['魔灵王', '混沌大天数', '混沌魔使']
      }
    })

    function changeInfo() {
      person.name = '魔君索伦森👻👻👻',
      person.job.hobby.play = 'fight',
      person.job.underlying[0] = '不灭 艾恩斯'
    }
    // 第一种，返回一个对象(常用)
    return {
      person,
      changeInfo
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
