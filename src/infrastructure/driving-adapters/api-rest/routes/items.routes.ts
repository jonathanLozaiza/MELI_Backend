import { Router } from 'express'

import {
  getItemsByQueryController,
  getByIdController
} from '../controllers/index'

const route = Router()

route.get('', getItemsByQueryController)
route.get('/:id', getByIdController)

export default route
