import { Middleware } from '@nuxt/types'
import { auth } from '@/lib/business-layer'

const middleware: Middleware = ({ route, redirect }) => {
  if (process.client && route.fullPath !== '/') {
    const user = auth.getCurrentUser()
    if (user === null) return redirect('/')
  }
}

export default middleware
