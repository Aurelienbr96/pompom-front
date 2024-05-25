/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ApiTask } from '@/api/tasks/task.api-model'
import type { TaskModel } from '@/api/tasks/task.domain-model'
import dayjs from 'dayjs'
import type { Ref } from 'vue'

export const convertTaskObj = ({
  tasks,
  taskByDate
}: {
  tasks: ApiTask.Get.Output
  taskByDate: Ref<TaskModel.TaskByDate>
}) => {
  const extendedTask = tasks?.extended_task

  extendedTask.forEach((task) => {
    const taskDate = dayjs(task.date).format('YYYY-MM-DD')
    const existingDateEntry = taskByDate.value.find((entry) => entry.date === taskDate)

    const { date, ...otherTaskData } = task

    if (existingDateEntry) {
      existingDateEntry.tasks.push(otherTaskData)
    } else {
      taskByDate.value.push({
        date: taskDate,
        tasks: [otherTaskData]
      })
    }
  })
}
