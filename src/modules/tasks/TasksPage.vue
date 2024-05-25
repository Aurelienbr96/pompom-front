<script setup lang="ts">
import { getTasks } from '@/api/tasks/task.api'
import type { TaskModel } from '@/api/tasks/task.domain-model'
import { useQuery } from '@tanstack/vue-query'
import { ref, watch } from 'vue'
import { convertTaskObj } from './utils/convertTaskObj'
import dayjs from 'dayjs'

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['task'],
  queryFn: getTasks
})

let taskByDate = ref<TaskModel.TaskByDate>([])

watch(
  data,
  (newValue) => {
    if (newValue?.extended_task) {
      convertTaskObj({ tasks: newValue, taskByDate })
    }
  },
  {
    immediate: true,
    deep: true
  }
)

const convertDate = (date: string) => {
  return dayjs(date).format('DD/MM/YYYY')
}
</script>

<template>
  <div class="ml-20">
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error: {{ error?.message }}</span>
    <p v-if="!data?.extended_task">It seems you do not have any tasks done yet.. Get to work!</p>
    <div v-else class="mt-6">
      <p v-for="stat in data?.task_statistic" :key="stat.id">
        Minutes worked on {{ stat.name }}: {{ stat.total_duration / 60 }} hours
      </p>
    </div>
    <div v-for="block in taskByDate" :key="block.date">
      <p>date: {{ convertDate(block.date) }}</p>
      <div
        class="mt-6 rounded-full p-4"
        :style="{ backgroundColor: task.color }"
        v-for="task in block.tasks"
        :key="task.id"
      >
        <p>name: {{ task.name }}</p>
        <p v-if="task.description">description: {{ task.description }}</p>

        <p>duration: {{ task.duration / 60 }}m</p>
      </div>
    </div>
  </div>
</template>
