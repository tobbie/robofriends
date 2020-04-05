
import {action_constants, ROBOTS_URL} from './constants'

export const setSearchField = (text) => {
    return {
        type : action_constants.CHANGE_SEARCH_FIELD,
        payload : text
    }
}

export const requestRobots = () => (dispatch) => {
    dispatch({type : action_constants.REQUEST_ROBOTS_PENDING});
    fetch(ROBOTS_URL)
    .then(response => {return response.json()})
    .then(data =>  dispatch({type: action_constants.REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: action_constants.REQUEST_ROBOTS_FAILED, payload: error}))

}