<template>
  <Demo @hello="sayHello" msg="你好啊" school="霍格沃茨">
    <template v-slot:qwe>
      <span>哈利波特与魔法师</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    function sayHello(value) {
      console.log(`你好，我收到了你的参数：${value}`);
    }
    return {
      sayHello
    }
  }
}
</script>
