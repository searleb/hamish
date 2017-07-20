const NEW_ERROR = 'NEW_ERROR'

const initialState = {
  status: null,
  message: null,
}

export function newError(error) {
  return {
    type: NEW_ERROR,
    status: error.status,
    message: error.message,
  }
}


export default function errors(state = initialState, action) {
  switch (action.type) {
    case 'NEW_ERROR':
      return {
        ...state,
        status: action.status,
        message: action.message,
      }
    default:
      return state
  }
}
