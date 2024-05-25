import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountDownStore = defineStore('countDown', () => {
  const isCountDownOn = ref(false)
  function startCountDown() {
    isCountDownOn.value = true
  }
  function resetCountDown() {
    isCountDownOn.value = false
  }

  return { startCountDown, resetCountDown, isCountDownOn: isCountDownOn.value }
})
