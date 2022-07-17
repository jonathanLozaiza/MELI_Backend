import { Items } from '../entities/Items'
import { Item } from '../entities/Item'

export interface ItemsRepository {
  getItemsByQuery: (q: string) => Promise<Items | []>
  getById: (id: string) => Promise<Item | null>
}
