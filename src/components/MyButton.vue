<script setup>
import { computed, ref } from 'vue'

const count = ref(0)

const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // 当 count.value 作为依赖被追踪时触发
    debugger
  },
  onTrigger(e) {
    // 当 count.value 被修改时触发
    debugger
  },
})
// 访问 plusOne，应该触发 onTrack
console.log(plusOne.value)
// 修改 count.value，应该触发 onTrigger
count.value++
</script>
