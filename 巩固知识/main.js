// 引入的不再是 Vue 的构造函数了，引入的是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app(类似于之前 Vue2 中的 vm，但是 app 比 vm 更轻，没那么多方法)
createApp(App).mount('#app')