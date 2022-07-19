import { URLgetByItems } from './protocols/protocols-http'
import { InMemoryItemsRepository } from '../../../implementations/InMemory/InMemoryItemsRepository'
const inMemoryItemsRepository = new InMemoryItemsRepository()

describe('Protocols Http and Querys to getItemsByQuery function', () => {
  test('Url api/items', () => {
    const parseUrl = URLgetByItems.parseUrl('http://localhost:3000/api/items')
    expect(parseUrl.href).toBe('http://localhost:3000/api/items')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response Query', () => {
    const parsedUrl = URLgetByItems.parseUrl('http://localhost:3000/api/items?q=aviones')
    const expected = '?q=aviones'
    expect(parsedUrl.search).toBe(expected)
  })

  test('Get items from getItemsByQuery', async () => {
    const expectedItems = await inMemoryItemsRepository.getItemsByQuery('aviones')
    expect(expectedItems).toEqual({
      author: {
        name: expect.any(String),
        lastname: expect.any(String)
      },
      categories: expect.any(Array<String>),
      items: [
        {
          id: expect.any(String),
          title: expect.any(String),
          price: {
            currency: expect.any(String),
            amount: expect.any(Number),
            decimal: expect.any(Number)
          },
          picture: expect.any(String),
          condition: expect.any(String),
          free_shipping: expect.any(Boolean),
          state_name: expect.any(String)
        },
        {
          id: expect.any(String),
          title: expect.any(String),
          price: {
            currency: expect.any(String),
            amount: expect.any(Number),
            decimal: expect.any(Number)
          },
          picture: expect.any(String),
          condition: expect.any(String),
          free_shipping: expect.any(Boolean),
          state_name: expect.any(String)
        },
        {
          id: expect.any(String),
          title: expect.any(String),
          price: {
            currency: expect.any(String),
            amount: expect.any(Number),
            decimal: expect.any(Number)
          },
          picture: expect.any(String),
          condition: expect.any(String),
          free_shipping: expect.any(Boolean),
          state_name: expect.any(String)
        },
        {
          id: expect.any(String),
          title: expect.any(String),
          price: {
            currency: expect.any(String),
            amount: expect.any(Number),
            decimal: expect.any(Number)
          },
          picture: expect.any(String),
          condition: expect.any(String),
          free_shipping: expect.any(Boolean),
          state_name: expect.any(String)
        }
      ]
    })
  })

  test('Get empty array from getItemsByQuery', async () => {
    const expectedItems = await inMemoryItemsRepository.getItemsByQuery('')
    expect(expectedItems).toEqual([])
  })
})

/// /////////////////////////// getById //////////////////////////////////

describe('Protocols Http and Querys to getById function', () => {
  test('Url api/items/', () => {
    const parseUrl = URLgetByItems.parseUrl('http://localhost:3000/api/items/')
    expect(parseUrl.href).toBe('http://localhost:3000/api/items/')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response Query to getById function', () => {
    const parsedUrl = URLgetByItems.parseUrl('http://localhost:3000/api/items/MLR45665')
    const expected = '/MLR45665'
    expect(`/${parsedUrl.pathname.split('/').pop()}`).toBe(expected)
  })

  test('Get items from getById', async () => {
    const expectedItems = await inMemoryItemsRepository.getById('MLA1146992549')
    expect(expectedItems).toEqual({
      author: {
        name: expect.any(String),
        lastname: expect.any(String)
      },
      item:
        {
          id: expect.any(String),
          title: expect.any(String),
          price: {
            currency: expect.any(String),
            amount: expect.any(Number),
            decimal: expect.any(Number)
          },
          picture: expect.any(String),
          condition: expect.any(String),
          free_shipping: expect.any(Boolean),
          sold_quantity: expect.any(Number),
          description: expect.any(String),
          path_from_root: expect.any(Array<String>)
        }
    })
  })

  test('Get null from getById', async () => {
    const expectedItems = await inMemoryItemsRepository.getById('')
    expect(expectedItems).toEqual(null)
  })
})
