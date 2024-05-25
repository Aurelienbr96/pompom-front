import type { ApiTag } from './tag.api-model'

export const getTags = async (): Promise<ApiTag.Get.Output> => {
  const response = await fetch('http://localhost:5050/tag')
  const data = await response.json()
  return data
}

export const createTag = async (input: ApiTag.CreateOne.Input) => {
  const response = await fetch('http://localhost:5050/tag', {
    method: 'POST',
    body: JSON.stringify(input)
  })
  const data = await response.json()
  return data
}
