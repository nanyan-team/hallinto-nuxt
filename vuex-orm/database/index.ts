import { Database } from '@vuex-orm/core'
import Artist from '../models/Artist'
import TransactionStatus from '../models/TransactionStatus'
import User from '../models/User'

const database = new Database()

database.register(User)
database.register(Artist)
database.register(TransactionStatus)

export default database
