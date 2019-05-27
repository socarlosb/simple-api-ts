import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/demo-db'

if (process.env.NODE_ENV === 'dev') {
  mongoose.set('debug', true)
}

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

mongoose.Promise = global.Promise

mongoose.connect(MONGO_URI, { useNewUrlParser: true }, err => {
  if (err) return console.log(`Failed to connect to: ${MONGO_URI}`)

  console.log(`DB is connected to ${MONGO_URI}`)
})

// models
import User from './user'

export { User }
