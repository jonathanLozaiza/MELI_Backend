import { Items } from '@domain/entities/Items'
import { ItemsRepository } from '@domain/repositories/ItemsRepository'
import { Exception } from '../../../domain/exceptions/Exception'
import axios from 'axios'
import { Item } from '@domain/entities/Item'

export class InMemoryItemsRepository implements ItemsRepository {
  /**
   * @param {string} q parameter to filter the response results in the meli api
   * @memberof ItemsRepository
   * @description this function returns an object with at most 4 items related to the search parameter q
   * @returns Items | []
   */
  async getItemsByQuery (q: string): Promise<Items | []> {
    try {
      // retrieve items
      const { data }: any = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`)

      // validate data
      if (data === undefined || data === {}) {
        throw new Exception('an error occurred while querying the api')
      }

      if (data.results.length === 0) {
        return []
      }

      // retrieve categories
      const { data: siteInfo } = await axios.get(`https://api.mercadolibre.com/sites/${data.site_id}`)

      // retrieve item images
      const normalizedData = []
      for (const item of data.results) {
        const { data: { pictures } } = await axios.get(`https://api.mercadolibre.com/items/${item.id}`)
        normalizedData.push({
          id: item.id as string,
          title: item.title as string,
          price: {
            currency: item.currency_id as string,
            amount: item.price as number,
            decimal: 2
          },
          picture: pictures[0].url as string,
          condition: item.condition as string,
          free_shipping: item.shipping.free_shipping as boolean,
          state_name: item.address.state_name as string
        })
      }

      // set data
      const items = {
        author: { name: 'Jonathan', lastname: 'Loaiza' },
        categories: siteInfo.categories.map((c: any) => c.name),
        items: normalizedData
      }

      return items
    } catch (error: any) {
      throw new Exception(error.message)
    }
  }

  /**
   * @param {string} id item id
   * @memberof ItemsRepository
   * @description get item by id
   * @returns Item | null
   */
  async getById (id: string): Promise<Item | null> {
    try {
      // validate the type and content of the id
      if (typeof id !== 'string' || id === '') {
        return null
      }

      // retrieve item data
      const promiseItemData = await axios.get(`https://api.mercadolibre.com/items/${id}`)
      const promiseItemDescription = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)

      const [{ data: itemData }, { data: itemDescription }] = await Promise.all([promiseItemData, promiseItemDescription])

      // validate item data
      if (itemData.error !== undefined) {
        throw new Exception(itemData.message)
      }
      if (itemDescription.error !== undefined) {
        throw new Exception(itemDescription.message)
      }

      // retrieve path from root
      const { data: categoryData } = await axios.get(`https://api.mercadolibre.com/categories/${itemData.category_id}`)

      const item = {
        author: {
          name: 'Jonathan',
          lastname: 'Loaiza'
        },
        item: {
          id: itemData.id as string,
          title: itemData.title as string,
          price: {
            currency: itemData.currency_id as string,
            amount: itemData.price as number,
            decimal: 2
          },
          picture: itemData.pictures[0].url as string,
          condition: itemData.condition as string,
          free_shipping: itemData.shipping.free_shipping,
          sold_quantity: itemData.sold_quantity as number,
          description: itemDescription.plain_text as string,
          path_from_root: categoryData.path_from_root.map((p: any) => p.name)
        }
      }
      return item
    } catch (error: any) {
      throw new Exception(error.message)
    }
  }
}
