const initState = { 
  authError: null,
  success: false
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case "LOGIN_ERROR": 
      return {
        ...state,
        authError: action.err.message,
        success: false
      }
    case "LOGIN_SUCCESS":
        return {
          ...state,
          authError: null,
          success: true
        }
      default: return state
    }
}

export default authReducer