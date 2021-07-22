export const loadRates = () => {
    return dispatch => {
        dispatch({
            type: 'rates/load/start'
        });

        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'rates/load/success',
                    payload: json,

                })
            })
    }
};