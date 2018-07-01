import CATEGORY_TYPES from '../actions/categoryActionTypes'

export const initialState = {
  categories: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_TYPES.UPDATE_CATEGORIES: {
      return {
        ...state,
        categories: action.categories
      }
    }

    case CATEGORY_TYPES.REVERT_STATE: {
      return initialState
    }

    default:
      return state
  }
}
