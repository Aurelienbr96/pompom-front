export namespace TaskModel {
  export type Task = {
    id: number
    name: string
    duration: number
    date: string
    description: string
    tagId: number
  }

  export type TaskWithColor = {
    color: string
  } & Task

  export type TaskStatistic = {
    id: number
    name: string
    total_duration: number
  }

  export type TaskByDate = Array<{
    date: string
    tasks: Omit<TaskModel.TaskWithColor, 'date'>[]
  }>
}
