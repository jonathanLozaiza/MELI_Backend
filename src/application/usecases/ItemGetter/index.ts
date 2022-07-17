import { Item } from '@domain/entities/Item'
import { ItemsRepository } from '@domain/repositories/ItemsRepository'

export class ItemGetterUseCase {
  private readonly _itemsResposiory: ItemsRepository

  constructor (itemsRepository: ItemsRepository) {
    this._itemsResposiory = itemsRepository
  }

  async run (id: string): Promise<Item | null> {
    const item: Item | null = await this._itemsResposiory.getById(id)
    return item
  }
}
