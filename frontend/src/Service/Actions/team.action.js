import { LIST_OF_TOURNAMENT_FAILED, LIST_OF_TOURNAMENT_REQUEST, LIST_OF_TOURNAMENT_SUCCESS } from "../Constants/tournament.constant"
import axios from 'axios'
import { LIST_OF_TEAM_BY_TOURNAMENT_FAILED, LIST_OF_TEAM_BY_TOURNAMENT_REQUEST, LIST_OF_TEAM_BY_TOURNAMENT_SUCCESS, LIST_OF_TEAM_FAILED, LIST_OF_TEAM_REQUEST, LIST_OF_TEAM_SUCCESS } from "../Constants/team.constant"

export const teamListAction = (params) => async (dispatch) => {
    try {
        dispatch({
            type: LIST_OF_TEAM_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        console.log('params = ', params)

        const { data } = await axios.get(`/api/team${params?params:''}`, config)

        dispatch({
            type: LIST_OF_TEAM_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIST_OF_TEAM_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}

export const teamByTournamentAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: LIST_OF_TEAM_BY_TOURNAMENT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/team/teambytournament/${id}`, config)

        dispatch({
            type: LIST_OF_TEAM_BY_TOURNAMENT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIST_OF_TEAM_BY_TOURNAMENT_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}