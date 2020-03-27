
import action_constants from './constants'

export const setSearchField = (text) => {
    return {
        type : action_constants.CHANGE_SEARCH_FIELD,
        payload : text
    }
}

export const requestRobots = () => (dispatch) => {
    dispatch({type : action_constants.REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.json()})
    .then(data =>  dispatch({type: action_constants.REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: action_constants.REQUEST_ROBOTS_FAILED, payload: error}))

}