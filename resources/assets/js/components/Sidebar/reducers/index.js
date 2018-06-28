import CATEGORY_TYPES from '../actions/categoryActions'

export const initialState = {
  categories: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CATEGORY_TYPES.GET_ALL: {
      return {...state, categories: action.categories}
    }

    default:
      return state
  }
}
