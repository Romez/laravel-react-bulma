import { CategoriesToServerTransformer } from '../../../transformers'
import {http} from '@utils'

/**
 * Сохранить категории
 * @param treeData
 * @returns {Function}
 */
export default (treeData) => {
  const categories = CategoriesToServerTransformer.fetchCollection(treeData)
  return http('put', window.laroute.route('category.update'), {categories: JSON.stringify(categories)})
}