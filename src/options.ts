import { join } from 'path'

const app_paths = {
  logger_fileName: 'access.log',
  logger_folder: join(__dirname, 'logs')
}

export { app_paths }
