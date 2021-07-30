export const loadConvertRates = () => {
    return dispatch => {
        dispatch({
            type: 'ConvertRates/load/start'
        });

        fetch(`https://finnhub.io/api/v1/forex/rates?base=USD&token=c3u3l1iad3iemlvdp540`)
            .then(response => response.json())
            .then(json =>  {
                dispatch({
                    type: 'ConvertRates/load/success',
                    payload: json,
                    base: json.base
                })
            })
    }
};

export const setChangeBaseValute = (valute) => {
    return {
        type: 'get/base/valute',
        payload: valute
    }
};


export const setHandleChangeConvert = (valute) => {
    return {
        type: 'get/converted/valute',
        payload: valute
    }
}

export const setHandleInput = (num) => {
    return {
        type: 'get/input/number',
        payload: num
    }
}


export const loadChangeBaseRates = (base) => {
    return dispatch => {
        fetch(`https://finnhub.io/api/v1/forex/rates?base=${base}&token=c3u3l1iad3iemlvdp540`)
            .then(response => response.json())
            .then(json =>  {
                dispatch({
                    type: 'ConvertChangeRates/load/success',
                    payload: json
                })
            })
    }
};
