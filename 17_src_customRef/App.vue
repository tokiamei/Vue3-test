<template>
<input type="text" v-model="keyWord">
<h3>{{keyWord}}</h3>
</template>

<script>
import { customRef } from 'vue'
export default {
  name: 'App',
  setup() {

    function myRef(val, timeOut) {
      return customRef((track, trigger) => {
        let timer
        return {
          get() {
            console.log(`有人从 myRef 容器读取数据了，我把 ${val}给她了`);
            track()
            return val
          },
          set(newdVal) {
            console.log(`有人在 myRef 容器修改数据了，修改后的数据是：${newdVal}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              val = newdVal
              trigger() 
            }, timeOut);
          }
        }
      })
    }
    let keyWord = myRef('hello', 0)
    return {
      keyWord
    }
  }
}
</script>
