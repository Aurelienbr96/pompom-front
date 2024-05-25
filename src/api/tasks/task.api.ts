import type { ApiTask } from './task.api-model'

export const getTasks = async (): Promise<ApiTask.Get.Output> => {
  const response = await fetch('http://localhost:5050/task')
  const data = await response.json()

  return data
}

export const createTask = async (
  input: ApiTask.CreateOne.Input
): Promise<ApiTask.CreateOne.Output> => {
  const newTask = JSON.stringify(input)
  const response = await fetch('http://localhost:5050/task', {
    method: 'POST',
    body: newTask
  })
  const data = await response.json()

  return data
}
