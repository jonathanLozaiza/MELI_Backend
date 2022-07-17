export interface Item {
  author: {
    name: string
    lastname: string
  }
  item: {
    id: string
    title: string
    price: {
      currency: string
      amount: number
      decimal: number
    }
    picture: string
    condition: string
    free_shipping: boolean
    sold_quantity: number
    description: string
    path_from_root: string[]
  }
}
