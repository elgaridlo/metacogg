import { LIST_OF_TOURNAMENT_FAILED, LIST_OF_TOURNAMENT_REQUEST, LIST_OF_TOURNAMENT_SUCCESS } from "../Constants/tournament.constant"
import axios from 'axios'
import { LIST_OF_TEAM_FAILED, LIST_OF_TEAM_REQUEST, LIST_OF_TEAM_SUCCESS } from "../Constants/team.constant"
import { LIST_OF_USER_FAILED, LIST_OF_USER_REQUEST, LIST_OF_USER_SUCCESS } from "../Constants/user.constant"

export const userListAction = () => async (dispatch) => {
    try {
        dispatch({
            type: LIST_OF_USER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`/api/user?sort=coin&sortOrder=desc`, config)

        dispatch({
            type: LIST_OF_USER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: LIST_OF_USER_FAILED,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}