import { CREATE_WINNER_TOURNAMENT_FAILED, CREATE_WINNER_TOURNAMENT_REQUEST, CREATE_WINNER_TOURNAMENT_SUCCESS, LIST_OF_TOURNAMENT_FAILED, LIST_OF_TOURNAMENT_REQUEST, LIST_OF_TOURNAMENT_SUCCESS } from "../Constants/tournament.constant"

export const tournamentListReducer = (state = {}, action) => {
    switch (action.type) {
      case LIST_OF_TOURNAMENT_REQUEST:
        return { loading: true }
      case LIST_OF_TOURNAMENT_SUCCESS:
        return { loading: false, listOfTournament: action.payload.data }
      case LIST_OF_TOURNAMENT_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const createdTournamentResultReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_WINNER_TOURNAMENT_REQUEST:
        return { loading: true }
      case CREATE_WINNER_TOURNAMENT_SUCCESS:
        return { loading: false, createTournamentWinner: action.payload }
      case CREATE_WINNER_TOURNAMENT_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }