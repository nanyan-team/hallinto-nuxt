import { Dayjs } from 'dayjs'

export type TArtist = {
  id: string
  name: string
  imageUrl?: string | null
  description?: string | null
  createdAt?: Dayjs | any
  updatedAt?: Dayjs | any
  deletedAt?: Dayjs | any | null
}
