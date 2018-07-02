import Transformer from './Transformer'

export default class CategoriesToServerTransformer extends Transformer {
  static fetch (data) {
    const {id, title, slug, children = []} = data

    return {
      id,
      title,
      slug,
      children: CategoriesToServerTransformer.fetchCollection(children)
    }
  }
}
