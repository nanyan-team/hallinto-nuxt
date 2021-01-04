import { Model } from '@vuex-orm/core'

export default class User extends Model {
  static entity = 'users'

  static fields() {
    return {
      id: this.uid(),
      name: this.string(null).nullable(),
      email: this.string(null).nullable(),
      password: this.string(null).nullable(),
      role: this.string(null).nullable(),
    }
  }

  id!: string
  name!: string | null
}
