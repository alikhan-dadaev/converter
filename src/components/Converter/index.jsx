import React, { useEffect, useState } from "react";
import styles from "./converter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadChangeBaseRates,
  loadConvertRates,
  setChangeBaseValute,
  setHandleChangeConvert,
  setHandleInput
} from "../../redux/convertReducer/action";


function Converter(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.convert.loading);
  const quotes = useSelector(state => state.convert.quotes);
  const exchangeRate = useSelector(state => state.convert.exchangeRates);
  const base = useSelector(state => state.convert.base);
  const convertTo = useSelector(state => state.convert.convertTo);
  const amount = useSelector(state => state.convert.amount); //то что записываю в первый инпут

  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount
  if(amountInFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exchangeRate).toFixed(2)
  } else {
    toAmount = amount
    fromAmount = (amount / exchangeRate).toFixed(2)
  }

  const handleChangeBase = (e) => {
    dispatch(setChangeBaseValute(e.target.value))
  }
  const handleChangeConvert = (e) => {
    dispatch(setHandleChangeConvert(e.target.value))
  }

  const handleFromInput = (e) => {
    dispatch(setHandleInput(e.target.value))
    setAmountInFromCurrency(true)
  }

  const handleToInput = (e) => {
    dispatch(setHandleInput(e.target.value))
    setAmountInFromCurrency(false)
  }



  useEffect(() => {
    dispatch(loadConvertRates());
  }, [])

  useEffect(() => {
    dispatch(loadChangeBaseRates(base));
  }, [base])

  console.log (amount)



  return loading ? (
      "loading..."
  ) : (
      <div className={styles.converter}>
        <h1>Конвертер</h1>
        <div className={styles['input-field']}>
          <div className={styles['input-one']}>
            <input
                type="number"
                value={fromAmount}
                onChange={handleFromInput}
            />
            <select name="base" value={base} onChange={handleChangeBase}>
              {quotes.map(quote => (
                  <option key={quote} value={quote}>{quote}</option>
              ))}
            </select>
          </div>
          <div className={styles['input-one']}>
            <input
                type="number"
                value={toAmount}
                onChange={handleToInput}
            />
            <select name="convertTo" value={convertTo} onChange={handleChangeConvert}>
              {quotes.map(quote => (
                  <option key={quote} value={quote}>{quote}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

  );
}

export default Converter;