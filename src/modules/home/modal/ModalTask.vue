<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { formatTime } from '../utils/formatTime'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { getTags } from '@/api/tags/tag.api'
import TagItem from '../../components/TagItem.vue'
import { ref, watch } from 'vue'
import { createTask } from '@/api/tasks/task.api'

const { mutate, isPending, isSuccess } = useMutation({
  mutationFn: createTask
})

const selectedTag = ref()
const name = ref()
const description = ref()

const props = defineProps<{
  timePassed: number
}>()

const handleOnSaveTask = () => {
  mutate({
    name: name.value,
    description: description.value,
    tagId: selectedTag.value,
    duration: props.timePassed,
    date: Date.now()
  })
}

const { data } = useQuery({
  queryKey: ['tags'],
  queryFn: getTags
})

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

watch(isSuccess, (newValue) => {
  if (newValue === true) {
    emit('confirm')
  }
})

const handleSelectTag = (tagId: number) => {
  selectedTag.value = tagId
}
</script>

<template>
  <VueFinalModal
    :click-to-close="false"
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white rounded-lg space-y-2"
  >
    <h1 class="text-3xl">Congratulations !</h1>
    <h1 class="text-xl">You worked {{ formatTime(timePassed) }} minutes</h1>
    <form class="flex flex-col">
      <input
        placeholder="task name"
        v-model="name"
        class="p-4 rounded-lg border-[1px] border-stone-800"
      />
      <input
        v-model="description"
        placeholder="task description"
        class="p-4 rounded-lg border-[1px] border-stone-800 mt-4"
      />
    </form>
    <h1>Select your tag:</h1>
    <ul class="flex flex-wrap gap-4 hover:cursor-pointer">
      <TagItem
        v-bind:isSelected="selectedTag === tag.id"
        v-for="tag in data"
        :key="tag.id"
        @click="handleSelectTag(tag.id)"
        v-bind:name="tag.name"
        v-bind:color="tag.color"
      />
    </ul>
    <button class="mt-1 ml-auto px-2 border rounded-lg" @click="handleOnSaveTask">
      <p v-if="isPending">Confirm</p>
      <p v-else>Confirm</p>
    </button>
  </VueFinalModal>
</template>
