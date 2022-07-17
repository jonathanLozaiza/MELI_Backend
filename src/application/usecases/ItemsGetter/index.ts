import { Items } from '@domain/entities/Items'
import { ItemsRepository } from '@domain/repositories/ItemsRepository'

export class ItemsGetterUseCase {
  private readonly _itemsResposiory: ItemsRepository

  constructor (itemsRepository: ItemsRepository) {
    this._itemsResposiory = itemsRepository
  }

  async run (query: string): Promise<Items | []> {
    const items: Items | [] = await this._itemsResposiory.getItemsByQuery(query)
    return items
  }
}
