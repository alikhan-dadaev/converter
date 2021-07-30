import React, {useEffect} from "react";
import styles from "./exchange.module.css";
import {useDispatch, useSelector} from "react-redux";
import {loadRates} from "../../redux/ratesReducer/action";
import {loadChangeBaseRates, setChangeBaseValute} from "../../redux/convertReducer/action";

function ExchangeRates(props) {
    const loading = useSelector(state => state.rates.loading);
    const quotes = useSelector(state => {
        if(state.rates.items) {
            return state.rates.items.quote || {}
        }

        return {}
    });

    const base = useSelector(state => state.rates.base);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRates());
    }, [])

    useEffect(() => {
        if(base) {
            dispatch(loadChangeBaseRates(base));
        }
    }, [base])

    const handleChangeBase = (e) => {
        dispatch(setChangeBaseValute(e.target.value))
    }

    return (
        loading ? 'loading...' : (
            <div className={styles.rates}>
                <h1>Курс валют</h1>
                <div className={styles.base}>
                    <select name="base" value={base} onChange={handleChangeBase}>
                        {Object.keys(quotes).map(name => (
                            <option key={name} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.rates}>
                    {Object.keys(quotes).map(key => {
                        return (
                            <div className={styles['rates-block']}>
                                <div className={styles.quote}>{key}</div>
                                <div className={styles.value}>{quotes[key].toFixed(4)}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    );

}

export default ExchangeRates;