
const initialState = {
    items: [],
    quotes: [],
    base: [],
    convertTo: [],
    amount: [1],
    exchangeRates: [],
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
                exchangeRates: Object.values(action.payload.quote)[0],
                base: action.payload.base,
                convertTo: action.payload.quote[0],
                loading: false
            };

        case 'get/base/valute':
            return {
                ...state,
                base: action.payload
            };

        case 'get/converted/valute':
            return {
                ...state,
                convertTo: action.payload
            };

        case 'get/input/number':
            return {
                ...state,
                amount: action.payload
            };

        case 'ConvertChangeRates/load/success':
            return {
                ...state,
                items: action.payload,
                exchangeRates: Object.values(action.payload.quote)[0],
            };



        default:
            return state;
    }
}