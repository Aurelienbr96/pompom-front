<script setup lang="ts">
import TagContainer from './component/TagContainer.vue'
import { ref, watch } from 'vue'
import { formatTime } from './utils/formatTime'
import { useHandleCountDown } from './hooks/useHandleCountDown'
import ModalTask from './modal/ModalTask.vue'

const {
  handleSetCountDown,
  handlePauseCountDown,
  countDown,
  timePassed,
  isCountDownOn,
  userInput,
  handleResetCountDown,
  formattedUserInput,
  hasCountStartedBefore,
  handleResetState
} = useHandleCountDown()

const show = ref(false)

watch(countDown, (newValue) => {
  if (newValue === 0) {
    show.value = true
  }
})

function confirm() {
  show.value = false
  handleResetState()
}
</script>

<template>
  <main class="flex w-full justify-between">
    <form class="flex flex-0.8 w-full flex-col items-center justify-center mb-20">
      <div class="z-10 flex flex-col">
        <p class="text-9xl" v-if="isCountDownOn || hasCountStartedBefore">
          {{ formatTime(formattedUserInput - timePassed) }}
        </p>
        <input
          class="text-center text-9xl focus:outline-none focus:border-none w-64 bg-transparent"
          v-else
          :disabled="isCountDownOn"
          v-model="userInput"
          placeholder="0"
          type="number"
        />
        <button v-if="isCountDownOn" v-on:click="handlePauseCountDown">PAUSE</button>
        <button v-else v-on:click="handleSetCountDown">START</button>
        <button v-if="!isCountDownOn && hasCountStartedBefore" v-on:click="handleResetCountDown">
          STOP
        </button>
        <ModalTask v-model="show" :timePassed="timePassed" @confirm="() => confirm()" />
      </div>
    </form>
    <TagContainer class="pt-10 flex-0.2" />
  </main>
</template>
