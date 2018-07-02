import CATEGORY_TYPES from '../actions/categoryActionTypes'

export const initialState = {
  categories: null,
  newCategoryName: ''
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

    case CATEGORY_TYPES.UPDATE_NEW_CATEGORY_NAME: {
      return {
        ...state,
        newCategoryName: action.newCategoryName
      }
    }

    case CATEGORY_TYPES.APPEND_CATEGORY: {
      return {
        ...state,
        categories: [...state.categories, action.category]
      }
    }

    default:
      return state
  }
}
