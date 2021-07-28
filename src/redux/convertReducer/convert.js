
const initialState = {
    items: [],
    quotes: [],
    loading: false
}

export const convertReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ConvertRates/load/start':
            return {
                ...state,
                loading: true
            };

        case 'ConvertRates/load/success':
            return {
                ...state,
                items: action.payload,
                quotes: Object.keys(action.payload.quote),
                firstCurr: Object.keys(action.payload.quote)[1],
                loading: false
            }



        default:
            return state;
    }
}