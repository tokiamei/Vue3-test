import { onMounted, reactive, onUnmounted } from 'vue'
export default function() {
    // 实现鼠标打点相关的数据
    const point = reactive({ x: 0, y: 0 })

    // 实现鼠标打点相关的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(`x:${point.x} -- y:${point.y}`);
    }
    // 实现鼠标打点相关的狗子
    onMounted(() => {
      window.addEventListener('click', savePoint)
    })

    onUnmounted(() => {
      window.removeEventListener('click', savePoint)
    })

    return point
}