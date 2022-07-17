import { Exception } from './Exception'

export class ItemsNotFoundException extends Exception {
  constructor () {
    super('Items not found')
    this.spanishMessage = 'no se encontraron items'
  }
}
