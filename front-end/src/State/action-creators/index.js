export const incressCounter = (count) => {
    return (dispatch) => {
        dispatch({
            type: 'incress',
            payload: count
        })
    }
}

export const decressCounter = (count) => {
    return (dispatch) => {
        dispatch({
            type: 'decress',
            payload: count
        })
    }
}


export const incressTwenty = (count) => {
    return (dispatch) => {
        dispatch({
            type: 'incress20',
            payload: count
        })
    }
}

export const decressTwenty = (count) => {
    return (dispatch) => {
        dispatch({
            type: 'decress20',
            payload: count
        })
    }
}