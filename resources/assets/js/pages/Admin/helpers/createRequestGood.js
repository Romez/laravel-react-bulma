import {http} from '@utils'

/**
 *
 * @param good
 * @return {function(*)}
 */
export default async (good) => {
  return await http('post', window.laroute.route('good.store'), good)
}