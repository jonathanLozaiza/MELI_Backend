import { NextFunction, Request, Response } from 'express'
import { InMemoryItemsRepository } from '../../../../implementations/InMemory/InMemoryItemsRepository'
import { ItemGetterUseCase } from '../../../../../application/usecases/ItemGetter'
import { Exception } from '../../../../../domain/exceptions/Exception'

export const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const inMemoryItemsRepository = new InMemoryItemsRepository()
  const itemGetterUseCase = new ItemGetterUseCase(inMemoryItemsRepository)

  try {
    if (typeof req.params.id !== 'string') {
      throw new Exception('The id parameter is missing')
    }
    const item = await itemGetterUseCase.run(`${req.params.id}`)
    res.json(item)
    return
  } catch (e) {
    return next(e)
  }
}
