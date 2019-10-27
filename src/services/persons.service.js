import { BaseService } from './base.service'
class PersonsService extends BaseService {
  static instance
  static get Instance () {
    return this.instance || (this.instance = new this())
  }
  getAll () {
    let _url = 'people'
    return this.get(`${this.api}${_url}`)
  }
  getPage (numPage) {
    let _url = 'people'
    return this.get(`${this.api}${_url}?page=${numPage}`)
  }
}
export const personsService = PersonsService.Instance
