export class IdIsString {
  async run (id: any): Promise<boolean> {
    if (typeof id !== 'string') return false
    return true
  }
}
