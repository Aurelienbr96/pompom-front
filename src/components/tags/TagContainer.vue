<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { getTags } from '../../api/getTags'
import TagItem from './TagItem.vue'

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['tags'],
  queryFn: getTags
})
function click(name: string) {
  alert(name)
}
</script>

<template>
  <div>
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error: {{ error?.message }}</span>
    <div v-else>
      <p>My tags:</p>
      <ul class="flex flex-wrap gap-4 hover:cursor-pointer">
        <TagItem
          v-for="tag in data"
          :key="tag.id"
          @click="click(tag.name)"
          v-bind:name="tag.name"
          v-bind:color="tag.color"
        />
      </ul>
    </div>
  </div>
</template>
