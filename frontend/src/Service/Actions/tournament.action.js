import { CREATE_WINNER_TOURNAMENT_FAILED, CREATE_WINNER_TOURNAMENT_REQUEST, CREATE_WINNER_TOURNAMENT_SUCCESS, LIST_OF_TOURNAMENT_FAILED, LIST_OF_TOURNAMENT_REQUEST, LIST_OF_TOURNAMENT_SUCCESS } from "../Constants/tournament.constant"
import axios from 'axios'

export const tournamentListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: LIST_OF_TOURNAMENT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/tournament`, {params: {sort: 'id'}}, config)

        dispatch({
            type: LIST_OF_TOURNAMENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIST_OF_TOURNAMENT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}


export const createTournamentResultAction = (body) => async (dispatch) => {
    try {
        dispatch({
            type: CREATE_WINNER_TOURNAMENT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/tournamentResult`, body ,config)

        dispatch({
            type: CREATE_WINNER_TOURNAMENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_WINNER_TOURNAMENT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}
