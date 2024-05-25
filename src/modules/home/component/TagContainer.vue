<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { createTag, getTags } from '../../../api/tags/tag.api'
import TagItem from '../../components/TagItem.vue'
import { ref } from 'vue'

const displayAddTagForm = ref(false)
const tagColor = ref('')
const tagName = ref('')

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['tags'],
  queryFn: getTags
})
const { mutate, isPending } = useMutation({
  mutationFn: createTag
})
function handleDisplayTagForm() {
  displayAddTagForm.value = !displayAddTagForm.value
}

function handleAddTag() {
  mutate({
    name: tagName.value,
    color: tagColor.value
  })
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
          v-bind:name="tag.name"
          v-bind:color="tag.color"
        />
      </ul>
      <button @click="handleDisplayTagForm" :class="`p-6 rounded-lg bg-slate-500 mt-4`">
        Add another tag +
      </button>
      <div v-if="displayAddTagForm">
        <div class="flex flex-col w-[80%] text-black">
          <input class="rounded-md mt-6" placeholder="tag name" v-model="tagName" />
          <input class="rounded-md mt-6" placeholder="tag color" v-model="tagColor" />
          <button @click="handleAddTag">{{ isPending ? 'Loading...' : 'submit' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
