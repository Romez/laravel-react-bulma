import SIDEBAR_TYPES from '../actions/sidebarActionTypes'

export const initialState = {
  categories: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SIDEBAR_TYPES.GET_ALL_CATEGORIES: {
      return {...state, categories: action.categories}
    }

    default:
      return state
  }
}
