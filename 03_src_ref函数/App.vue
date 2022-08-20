<template>
<!-- 模板中不需要去 .value -->
  <h1>我是 App 组件</h1>
  <h2>我是：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工作类型：{{job.type}}</h2>
  <h2>薪水：{{job.salary}}</h2>
  <h2>爱好：{{job.hobby.play}}</h2>
  <button @click='changeInfo'>点击更换信息</button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'App',
  setup() {
    let name = ref('混沌魔军索伦森')
    let age = ref(20000)
    let job = ref({
      type: '黑暗教父',
      salary: '30K',
      hobby: {
        play: '打麻将'
      }
    })
    
    function changeInfo() {
      name.value = '魔君索伦森👻👻👻'
      job.value.type = '深渊魔主'
      job.value.hobby.play = '和小弟打架'
      console.log(name.value, age.value, '********************');
      console.log('%%%%%%%%%%%%', job.value.type, job.value.hobby.play);
    }
    // 第一种，返回一个对象(常用)
    return {
      name,
      age,
      changeInfo,
      job
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
