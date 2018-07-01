import { CategoriesToServerTransformer } from '../../../transformers'
import {http} from '@utils'

/**
 * Сохранить категории
 * @param data
 * @returns {Function}
 */
export default (data) => {
  const categories = CategoriesToServerTransformer.fetchCollection(data.treeData)

  return http('post', window.laroute.route('category.store'), {categories: JSON.stringify(categories)})
}