import express, {
  Request,
  Response,
  NextFunction,
  json,
  Application
} from 'express'
import cors from 'cors'
import { authRoutes, userRoutes } from './routes'
import { requestLogger } from './middleware'

const app: Application = express()

// security
app.disable('x-powered-by')

// middleware
app.use(cors())
// parse request.body
app.use(json())

// logs
app.use(requestLogger)

// routes
// route: version
app.get('/api/v1', (req: Request, res: Response) => {
  res.json({
    name: 'api',
    version: '1.0.0'
  })
})
// routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', userRoutes)

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  error = new Error()

  res.status(error.status || 500).json({ error })
  // .json({ error: error.message || 'Something went wrong' })
})

export default app
