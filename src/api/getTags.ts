import type { ApiTag } from './tag.api-model'

export const getTags = async (): Promise<ApiTag.Get.Output> => {
  const response = await fetch('http://localhost:5050/tag')
  const data = await response.json()
  console.log('dataaa', data)
  return data
}
