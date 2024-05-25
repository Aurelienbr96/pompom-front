<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCountDownStore } from './modules/home/store/countDown.store'
const { isCountDownOn } = useCountDownStore()
</script>

<template>
  <div class="flex min-h-screen bg-gradient-to-b from-orange to-orange2 text-white">
    <header v-if="!isCountDownOn">
      <nav class="h-full w-[200px] flex flex-col py-2 border-r-[1px] border-r-white">
        <RouterLink class="border-b-[1px] border-b-white px-2" to="/">Home</RouterLink>
        <RouterLink class="mt-4 border-b-[1px] border-b-white px-2" to="/task"
          >Task history</RouterLink
        >
      </nav>
    </header>

    <RouterView />
  </div>
</template>
