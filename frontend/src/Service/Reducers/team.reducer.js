import { LIST_OF_TEAM_FAILED, LIST_OF_TEAM_REQUEST, LIST_OF_TEAM_SUCCESS } from "../Constants/team.constant"

export const teamListReducer = (state = {}, action) => {
    switch (action.type) {
      case LIST_OF_TEAM_REQUEST:
        return { loading: true }
      case LIST_OF_TEAM_SUCCESS:
        return { loading: false, listOfTeam: action.payload.data }
      case LIST_OF_TEAM_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }