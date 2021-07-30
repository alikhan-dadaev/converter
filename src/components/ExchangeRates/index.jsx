import React, {useEffect} from "react";
import styles from "./exchange.module.css";
import {useDispatch, useSelector} from "react-redux";
import {loadRates} from "../../redux/ratesReducer/action";
import {loadChangeBaseRates, setChangeBaseValute} from "../../redux/convertReducer/action";

function ExchangeRates(props) {
    const loading = useSelector(state => state.rates.loading);
    const quotes = useSelector(state => state.rates.quotes);
    const base = useSelector(state => state.rates.base);
    const dispatch = useDispatch();
    console.log(base)

    useEffect(() => {
        dispatch(loadRates());
    }, [])

    useEffect(() => {
        dispatch(loadChangeBaseRates(base));
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
                          {quotes.map(quote => (
                              <option key={quote} value={quote[0]}>{quote[0]}</option>
                          ))}
                    </select>
              </div>
              <div className={styles.rates}>
                  {quotes.map(quote => {
                      return (
                          <div className={styles['rates-block']}>
                              <div className={styles.quote}>{quote[0]}</div>
                              <div className={styles.value}>{quote[1].toFixed(4)}</div>
                          </div>
                      )
                  })}
              </div>
          </div>
      )
    );

}

export default ExchangeRates;
