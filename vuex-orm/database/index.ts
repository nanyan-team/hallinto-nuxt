import { Database } from '@vuex-orm/core'
import Artist from '../models/Artist'
import User from '../models/User'

const database = new Database()

database.register(User)
database.register(Artist)

export default database
