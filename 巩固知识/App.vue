<template>
  <h3>我是 App 组件(祖)</h3>
  <input type="text" v-model="keyWord" placeholder="请输入关键词">
  <h2>{{keyWord}}</h2>
  <hr>
  <button @click="addEmoji">点击为 {{name}} 添加表情</button>
  <hr>
  <h2 @click="addTwo">年龄：{{age}}</h2>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'App',
  setup() {

    // 数据
    const hero = reactive({
      keyWord: '虚空桎梏',
      name: '浑元天尊',
      age: 100
    })
    
    // 返回结果
    return {
      ...toRefs(hero)  
    }
  }
}
</script>