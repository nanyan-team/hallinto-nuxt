import { Model } from '@vuex-orm/core'
import dayjs, { Dayjs } from 'dayjs'

// TODO: relation with Campaign, Products, Transactions
export default class Artist extends Model {
  // module name
  static entity = 'artists'

  // module states
  static fields() {
    return {
      id: this.string(''),
      name: this.string(null),
      imageUrl: this.string(null).nullable(),
      description: this.string(null).nullable(),
      createdAt: this.attr(dayjs()),
      updatedAt: this.attr(dayjs()),
      deletedAt: this.attr(null).nullable(),
    }
  }

  // states types
  id!: string
  name!: string
  imageUrl!: string | null
  description!: string | null
  createdAt!: Dayjs | any
  updatedAt!: Dayjs | any
  deletedAt!: Dayjs | any | null
}
