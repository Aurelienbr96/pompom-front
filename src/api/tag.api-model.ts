import type { TagModel } from './tag.domain-model'

export namespace ApiTag {
  export namespace Get {
    export type Output = TagModel.Tag[]
  }
}
