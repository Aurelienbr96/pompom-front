<script setup lang="ts">
type Props = {
  name: string
  color: string
}
const props = defineProps<Props>()
</script>

<template>
  <li :style="{ backgroundColor: color }" :class="`p-6 rounded-lg`">{{ props.name }}</li>
</template>
