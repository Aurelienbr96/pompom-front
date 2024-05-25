import type { TaskModel } from './task.domain-model'

export namespace ApiTask {
  export namespace Get {
    export type Input = void
    export type Output = {
      extended_task: TaskModel.TaskWithColor[]
      task_statistic: TaskModel.TaskStatistic[]
    }
  }
  export namespace CreateOne {
    export type Input = Omit<TaskModel.Task, 'id' | 'date'> & { date: number }
    export type Output = TaskModel.Task
  }
}
