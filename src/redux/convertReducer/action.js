export const loadConvertRates = () => {
    return dispatch => {
        dispatch({
            type: 'ConvertRates/load/start'
        });

        fetch('https://finnhub.io/api/v1/forex/rates?base=USD&token=c3u3l1iad3iemlvdp540')
            .then(response => response.json())
            .then(json =>  {
                dispatch({
                    type: 'ConvertRates/load/success',
                    payload: json
                })
            })
    }
};

