export interface Items {
  author: {
    name: string
    lastname: string
  }
  categories: string[]
  items: Array<{
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
  }>
}
