import type { TagModel } from './tag.domain-model'

export namespace ApiTag {
  export namespace Get {
    export type Output = TagModel.Tag[]
  }
  export namespace CreateOne {
    export type Output = void
    export type Input = Omit<TagModel.Tag, 'id'>
  }
}
