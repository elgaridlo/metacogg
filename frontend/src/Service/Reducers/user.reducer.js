import { LIST_OF_USER_FAILED, LIST_OF_USER_REQUEST, LIST_OF_USER_SUCCESS } from "../Constants/user.constant"

export const userListReducer = (state = {}, action) => {
    switch (action.type) {
      case LIST_OF_USER_REQUEST:
        return { loading: true }
      case LIST_OF_USER_SUCCESS:
        return { loading: false, listOfUser: action.payload.data }
      case LIST_OF_USER_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }