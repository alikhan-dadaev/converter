import React, { useEffect, useState } from "react";
import styles from "./converter.module.css";
import { useDispatch, useSelector } from "react-redux";

import { loadConvertRates } from "../../redux/convertReducer/action";

function Converter(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.convert.loading);
  const rates = useSelector((state) => state.convert.items);
  const qoutes = useSelector((state) => state.convert.quotes);
  const valute = rates.quote ? rates.quote : "";
  const firstCurrency = useSelector((state) => state.convert.firstCurr);
  const baseValute = rates.base;


const [base, setBase] = useState();


  useEffect(() => {
    dispatch(loadConvertRates());
  }, []);


  const changeCurrency = (e) => {
    setBase ( e.target.value);
  }



  return loading ? (
    "loading..."
  ) : (
    <div className={styles.converter}>
      <h1>Конвертер</h1>
        <input type="number" />
        <select value={base} onChange={changeCurrency} >
            {qoutes.map(qoute => (
                <option key={qoute} value={qoute}>{qoute}</option>
            ))}
        </select>
      <div className={styles.equals}>=</div>
        <input type="number" />
        <select value={firstCurrency}>
            {qoutes.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}

        </select>
    </div>
  );
}

export default Converter;
