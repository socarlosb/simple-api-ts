import { existsSync, mkdirSync } from 'fs'
import rfs from 'rotating-file-stream'
import morgan from 'morgan'

import { app_paths } from '../options'

// ensure log directory exists
existsSync(app_paths.logger_folder) || mkdirSync(app_paths.logger_folder)

const requestLogger = rfs(app_paths.logger_fileName, {
  interval: '1d', // rotate daily
  path: app_paths.logger_folder
})

export default morgan('common', { stream: requestLogger })
