export const incCount = () => (dispatch) => {
    return dispatch({type: 'inc'});
}

export const decCount = () => (dispatch) => {
    return dispatch({type: 'dec'})
}