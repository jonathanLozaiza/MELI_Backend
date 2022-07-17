import { Request, Response, Router, NextFunction } from 'express'
import itemsRoutes from './items.routes'
import { Exception } from '../../../../domain/exceptions/Exception'

const route = Router()

route.use('/api/items', itemsRoutes)

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Exception) {
    res.status(400).json({
      message: err.spanishMessage === '' ? err.message : err.spanishMessage
    })
  } else {
    next(err)
  }
})

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  res.status(500)
  res.json({
    error: err
  })
})

export default route
