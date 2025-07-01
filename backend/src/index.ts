import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'

//Main Api
type Env = {
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables: {
    userId: string
  }
}

const api = new Hono<Env>().basePath('/api')
api.use('/*', cors())

//V1
const v1 = api.basePath('/v1')


//User routes
v1.route('/user', userRouter)

//Blog routes
v1.route('/blog', blogRouter)

export default api