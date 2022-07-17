import { NextFunction, Request, Response } from 'express'
import { InMemoryItemsRepository } from '../../../../implementations/InMemory/InMemoryItemsRepository'
import { ItemsGetterUseCase } from '../../../../../application/usecases/ItemsGetter'
import { Exception } from '../../../../../domain/exceptions/Exception'

export const getItemsByQuery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const inMemoryItemsRepository = new InMemoryItemsRepository()
  const itemsGetterUseCase = new ItemsGetterUseCase(inMemoryItemsRepository)
  try {
    if (typeof req.query.q !== 'string') {
      throw new Exception('The search parameter is missing')
    }
    const items = await itemsGetterUseCase.run(`${req.query.q}`)
    res.json(items)
    return
  } catch (e) {
    return next(e)
  }
}
