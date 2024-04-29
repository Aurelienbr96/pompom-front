<script setup lang="ts">
import TagContainer from '../tags/TagContainer.vue'
import { computed } from 'vue'
import { formatTime } from './utils/formatTime'
import { useHandleCountDown } from './hooks/useHandleCountDown'

const { handleSetCountDown, handleStopCountDown, countDown, timePassed, isCountDownOn } =
  useHandleCountDown()

const timeRemaining = computed(() => countDown.value - timePassed.value)

const renderCountDown = computed(() => {
  return formatTime(timeRemaining.value)
})
</script>

<template>
  <form class="flex w-full flex-col items-center justify-center mb-20">
    <div class="z-10 flex flex-col">
      <p class="text-9xl" v-if="isCountDownOn">{{ renderCountDown }}</p>
      <input
        class="text-center text-9xl focus:outline-none focus:border-none w-64 bg-transparent"
        v-else
        :disabled="isCountDownOn"
        v-model="countDown"
        placeholder="0"
        type="number"
      />
      <button v-if="isCountDownOn" v-on:click="handleStopCountDown">STOP</button>
      <button v-else v-on:click="handleSetCountDown">START</button>
    </div>
  </form>
  <TagContainer class="pt-10" />
</template>
