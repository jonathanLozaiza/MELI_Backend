import path from 'path'
import * as dotenv from 'dotenv'
import { StartBackendApp } from './startBackendApp'

try {
  dotenv.config({
    path: path.resolve(__dirname, '../../../../.env')
  })

  new StartBackendApp().start()
} catch (error) {
  console.log(error)
}
