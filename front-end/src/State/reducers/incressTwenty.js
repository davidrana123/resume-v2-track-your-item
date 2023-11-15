const incressTwenty = (state = 0, action) => {
    switch (action.type) {
        case 'incress20':
            return state + 20;
        case 'decress20':
            return state - 20;
        default:
            return state;
    }
};

export default incressTwenty;
