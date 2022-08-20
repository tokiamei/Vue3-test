<template>
  <h1>我是 App 组件</h1>
  <h2>我是：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <button @click='sayHi'>点击打招呼</button>
  <hr>
  <button @click='fly'>你能飞吗？？？</button>
</template>

<script>
import { h } from 'vue'

export default {
  name: 'App',
  // 此处只是测试一下 setup，暂时不考虑响应式的问题
  setup() {
    // 数据
    let name = '混沌魔军索伦森'
    let age = 20000
    // 方法
    function sayHi() {
      console.log(`我的名字是${name}，今年${age}岁了`);
    }
    
    // 第一种，返回一个对象(常用)
    return {
      name,
      age,
      sayHi
    }  

    // 第二种，返回一个渲染函数
    // return () => h('h1', 'M78星云')
  },
  data() {
    return {
      sex: 'none'
    }
  },
  methods: {
    fly() {
      console.log('I CAN FLY######');
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
