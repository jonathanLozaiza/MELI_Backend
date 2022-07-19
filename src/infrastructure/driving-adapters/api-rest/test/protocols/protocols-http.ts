import { URL } from 'url'

export class URLgetByItems {
  public static parseUrl (url: string): URL {
    return new URL(url)
  }
}
