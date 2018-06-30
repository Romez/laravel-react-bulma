import Transformer from './Transformer'

export default class CoAuthorTransformer extends Transformer {
  static fetch (data) {
    return {
      currentPage: data.current_page,
      lastPage: data.last_page
    }
  }
}
