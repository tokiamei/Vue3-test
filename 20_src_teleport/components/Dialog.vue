<template>
  <div>
    <button @click="isShow = !isShow">点击弹窗</button>
    <teleport to="body">
        <div class="mask" v-show="isShow">
					<div class="dialog">
            <h3>我是一个弹窗</h3>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
            <h4>一些内容</h4>
					<button @click="isShow = false">关闭弹窗</button>
        </div>
    </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Dialog',
    setup() {
        let isShow = ref(false)
        return { isShow }
    }
}
</script>

<style>
    .dialog {
			position: relative;
			top: 50%;
			left: 50%;
			margin-left: -50px;
			width: 100px;
			background-color: crimson;
    }
    .mask {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: cadetblue;
			opacity: 0.5;
    }
</style>