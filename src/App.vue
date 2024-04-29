<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCountDownStore } from './components/timer/store/countDown.store'
const { isCountDownOn } = useCountDownStore()
</script>

<template>
  <div class="flex min-h-screen bg-gradient-to-b from-orange to-orange2 text-white">
    <header v-if="!isCountDownOn">
      <nav class="h-full w-[200px]">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>
