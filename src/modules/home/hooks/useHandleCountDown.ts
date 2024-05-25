import { computed, onUnmounted, ref } from 'vue'

export const useHandleCountDown = () => {
  const userInput = ref(0)
  const formattedUserInput = ref(0)
  const countDown = ref(0)
  const timePassed = ref(0) // Track elapsed time

  const intervalId = ref<null | ReturnType<typeof setInterval>>(null)
  const isCountDownOn = computed(() => intervalId.value !== null)
  const hasCountStartedBefore = computed(() => timePassed.value !== 0)

  function handlePauseCountDown(event?: any) {
    if (event) event.preventDefault()
    if (intervalId.value) {
      clearInterval(intervalId.value)
      intervalId.value = null // Set to null when cleared
    }
  }

  function handleResetCountDown(event?: any) {
    if (event) event.preventDefault()
    handlePauseCountDown()

    countDown.value = 0
  }

  function handleResetState() {
    countDown.value = 0
    timePassed.value = 0
    userInput.value = 0
    formattedUserInput.value = 0
  }

  function createInterval() {
    return setInterval(() => {
      countDown.value = countDown.value - 1
      timePassed.value += 1
      if (countDown.value === 0) {
        handleResetCountDown()
      }
    }, 1000)
  }

  // take a seconds number and return a min:second format
  function handleSetCountDown() {
    if (hasCountStartedBefore.value) {
      intervalId.value = createInterval()
    } else if (userInput.value !== 0 && userInput.value <= 1440 && userInput.value >= 1) {
      countDown.value = userInput.value * 60
      timePassed.value = 0
      formattedUserInput.value = userInput.value * 60
      intervalId.value = createInterval()
    } else alert('Please enter a value between 1 and 1440')
  }
  onUnmounted(() => handleResetCountDown())
  return {
    handleSetCountDown,
    formattedUserInput,
    handleResetCountDown,
    handlePauseCountDown,
    countDown,
    handleResetState,
    userInput,
    timePassed,
    isCountDownOn,
    hasCountStartedBefore
  }
}
