
const initialState = {
    items: [],
    valute: [],
    USD: [],
    EUR: [],
    BYN: [],
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
                valute: action.valute,
                USD: action.valute.USD,
                EUR: action.valute.EUR,
                BYN: action.valute.BYN,
                loading: false
            }


        default:
            return state
    }
}