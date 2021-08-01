const initialState = {
  items: [],
  quotes: [],
  loading: false,
};

export const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "rates/load/start":
      return {
        ...state,
        loading: true,
      };

    case "rates/load/success":
      return {
        ...state,
        items: action.payload,
        quotes: Object.entries(action.payload.quote),
        base: action.payload.base,
        loading: false,
      };

    case "get/base/valute":
      return {
        ...state,
        base: action.payload,
      };

    case "ConvertChangeRates/load/success":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
