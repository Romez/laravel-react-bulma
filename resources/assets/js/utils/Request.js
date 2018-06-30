/**
 * Axios helper wrapper
 * @param method
 * @param query
 * @param data
 * @param isReject
 * @returns {Promise<any>}
 */
export default (method = 'get', query, data = false, isReject = false) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (data) {
        const response = await window.axios[method](query, data)
        resolve(response)
      } else {
        const response = await window.axios[method](query)
        resolve(response)
      }
    } catch ({response}) {
      const message = (response.data) ? response.data.message : ''
      switch (response.status) {
        case 422:
          alert('Ошибка валидации! \n' + message)
          break
        case 419:
          alert('Ваша сессия устарела, пожалуйста перезагрузите страницу.')
          break
        case 401:
          alert('Не авторизован!')
          break
        default:
          alert('Что-то пошло не так!')
          break
      }

      if (isReject) { reject(response) }
    }
  })
}
