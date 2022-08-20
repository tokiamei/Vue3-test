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
    const person = reactive({ name: '李星云', age: 19 })

    // 监视
    //#region 
    // 情况 1：监视 ref 定义的 1 个响应式数据
    /* watch(sum, (newVal, oldVal) => {
        console.log(`sum发生变化了，${newVal}，${oldVal}`);
    }) */
    //#endregion

    //#region 
    // 情况 2：监视 ref 定义的 多 个响应式数据，同时写多个 watch，这个是 Vue2 不支持的
    /* watch(sum, (newVal, oldVal) => {
        console.log(`sum发生变化了，${newVal}，${oldVal}`);
    })
    watch(msg, (newVal, oldVal) => {
        console.log(`msg发生变化了，${newVal}，${oldVal}`);
    }) */
    

    /* 
        直接写在一个 watch 中
    */
    /* watch([sum, msg], (newVal, oldVal) => {
        // console.log(`sum 或 msg 发生变化了，${newVal}，${oldVal}`);
        console.log(newVal, oldVal);
    }) */

    /* 
        添加 immediate 属性 的写法
    */
   /* watch([sum, msg], (newVal, oldVal) => {
        // console.log(`sum 或 msg 发生变化了，${newVal}，${oldVal}`);
        console.log(newVal, oldVal);
    }, { immediate: true }) */
    //#endregion

    //#region 
    /* 
        情况 3：监视 reactive 所定义的一个响应式数据的全部数据
            注意：
                【1】此处无法获取正确的 oldVal
                【2】强制开启了深度监视(deep 配置无效)
    */
    /* watch(person, (nVal, oVal) => {
        // console.log(`sum发生变化了，${nVal}，${oVal}`);
        console.log('person 发生变化了', nVal, oVal, nVal === oVal);
    }, { immediate: true }) */
    //#endregion
    

    /* 
        情况 4：监视 reactive 所定义的一个响应式数据的某个数据
    */
    
    watch(() => person.name, (nVal, oVal) => {
        console.log('person 的 name 发生变化了', nVal, oVal, nVal === oVal);
    }, { immediate: true })


    /* 
        情况 5：监视 reactive 所定义的一个响应式数据的一些数据
    */
    watch([() => person.name, () => person.age], (nVal, oVal) => {
            console.log('person 的 name 发生变化了', nVal, oVal, nVal === oVal);
        }, { immediate: true })



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
