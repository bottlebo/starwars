import { BaseService } from './base.service'
class CommonService extends BaseService {
  static instance
  static get Instance () {
    return this.instance || (this.instance = new this())
  }
  fromUrl (url) {
    return this.get(url)
  }
}
export const commonService = CommonService.Instance
