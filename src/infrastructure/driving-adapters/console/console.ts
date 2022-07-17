import path from 'path'
import * as dotenv from 'dotenv'
// import { Items } from '../../../domain/entities/Items'
import { ItemsGetterUseCase } from '../../../application/usecases/ItemsGetter'
import { ItemGetterUseCase } from '../../../application/usecases/ItemGetter'
import { InMemoryItemsRepository } from '../../implementations/InMemory/InMemoryItemsRepository'

(async () => {
  dotenv.config({
    path: path.resolve(__dirname, '../../../../.env')
  })
  const inMemoryItemsRepo = new InMemoryItemsRepository()

  // get items
  const itemsGetterUseCase = new ItemsGetterUseCase(inMemoryItemsRepo)
  const itemsReturned = await itemsGetterUseCase.run('aviones')
  console.log(itemsReturned)

  // get item
  const itemGetterUseCase = new ItemGetterUseCase(inMemoryItemsRepo)
  const itemReturned = await itemGetterUseCase.run('MLA775986253')
  console.log(itemReturned)
})()
