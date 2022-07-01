import { LIST_OF_TOURNAMENT_FAILED, LIST_OF_TOURNAMENT_REQUEST, LIST_OF_TOURNAMENT_SUCCESS } from "../Constants/tournament.constant"
import axios from 'axios'
import { LIST_OF_TEAM_FAILED, LIST_OF_TEAM_REQUEST, LIST_OF_TEAM_SUCCESS } from "../Constants/team.constant"

export const teamListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: LIST_OF_TEAM_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/team`, config)

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