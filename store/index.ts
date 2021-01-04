import VuexORM from '@vuex-orm/core'
import database from '@/vuex-orm/database'

export const plugins = [VuexORM.install(database)]
