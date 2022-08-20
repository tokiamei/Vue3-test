<template>
  <h1>Demo 组件：一个神的信息</h1>
  firstName：<input type="text" v-model="person.firstName">
  <br>
  lastName：<input type="text" v-model="person.lastName">
  <br>
  fullName：<input type="text" v-model="person.fullName">
</template>

<script>
import { reactive, computed } from '@vue/reactivity'
export default {
  name: 'Demo',
  setup() {
    // 数据
    const person = reactive({
      firstName: '混沌魔君',
      lastName: '索伦森'
    })
    // 计算属性--简写形式
    /* person.fullName = computed(() => {
        return `${person.firstName}-${person.lastName}`
    }) */
    
    // 计算属性--完整形式
    person.fullName = computed({
        get() {
            return `${person.firstName}-${person.lastName}`
        },
        set(val) {
            let nameArr = val.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })

    // 返回一个对象
    return {
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
