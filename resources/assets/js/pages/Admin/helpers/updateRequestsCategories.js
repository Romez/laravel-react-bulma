import { CategoriesToServerTransformer } from '../../../transformers'
import {http} from '@utils'

/**
 * Сохранить категории
 * @param treeData
 * @returns {Function}
 */
export default (treeData) => {
  const categories = CategoriesToServerTransformer.fetchCollection(treeData)

  return http('post', window.laroute.route('category.store'), {categories: JSON.stringify(categories)})
}