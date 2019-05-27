require('dotenv').config()

import app from './app'

const PORT = process.env.NODE_PORT || 3000
const ENV = process.env.NODE_ENV || 'development'

app.listen(PORT, () =>
  console.info(`Running server in '${ENV}' mode, on port ${PORT}`)
)
