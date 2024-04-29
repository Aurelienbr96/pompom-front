import { onUnmounted, ref } from 'vue'

export const useHandleCountDown = () => {
  const countDown = ref(0)
  const timePassed = ref(0)

  const isCountDownOn = ref<boolean>(false)

  let intervalId: any
  function handleStopCountDown() {
    clearInterval(intervalId)
    isCountDownOn.value = false
    countDown.value = 0
    timePassed.value = 0
  }
  // take a seconds number and return a min:second format
  function handleSetCountDown() {
    if (countDown.value !== 0 && countDown.value <= 1440 && countDown.value >= 1) {
      isCountDownOn.value = true
      countDown.value = countDown.value * 60
      intervalId = setInterval(() => {
        timePassed.value = timePassed.value + 1
        if (timePassed.value === countDown.value) {
          handleStopCountDown()
        }
      }, 1000)
    } else alert('Please enter a value between 1 and 1440')
  }
  onUnmounted(() => handleStopCountDown())
  return { handleSetCountDown, handleStopCountDown, countDown, timePassed, isCountDownOn }
}
