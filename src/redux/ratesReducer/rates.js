
const initialState = {
    items: [],
    valute: [],
    loading: false
}

export const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'rates/load/start':
            return {
                ...state,
                loading: true
            };

        case 'rates/load/success':
            return {
                ...state,
                items: action.payload,
                valute: action.payload.Valute,
                loading: false
            }


        default:
            return state
    }
}