const reducer = (state=0, action) => {
    if(action.type === 'incress'){
        return state + action.payload;
    }else if(action.type === 'decress'){
        return state - action.payload;
    }else{
        return state;
    }
}

export default reducer;