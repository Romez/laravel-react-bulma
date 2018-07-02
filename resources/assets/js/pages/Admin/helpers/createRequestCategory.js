import {http} from '@utils'

/**
 * Отправить запрос на создание категории
 * @param title
 * @return {function(*)}
 */
export default async (title) => {
  const url = window.laroute.route('category.store')
  const {data: {category}} = await http('post', url, {title})
  return category
}