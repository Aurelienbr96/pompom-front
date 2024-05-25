<script setup lang="ts">
type Props = {
  name: string
  color: string
  isSelected?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <li
    :style="{ backgroundColor: color }"
    :class="{
      'p-6 cursor-pointer': true,
      'rounded-lg': true,
      'border-4 border-violet-600': isSelected
    }"
  >
    {{ props.name }}
  </li>
</template>
