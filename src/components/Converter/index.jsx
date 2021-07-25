import React, { useState } from "react";
import styles from "./converter.module.css";
import { useSelector } from "react-redux";

function Converter(props) {
  const loading = useSelector((state) => state.convert.loading);
  const rates = useSelector(state => state.convert.items) ;
  const qoutes = useSelector(state => state.convert.quotes)
  const valute = (rates.quote ? rates.quote : '');



  const [number, setNumber] = useState(0);
  const [base, setBase]= useState();
  console.log(base)


    const changeNumber = (e) => {
      setNumber(e.target.value)
    }
    const changeCurrency = (e) => {
        setBase(e.target.value)
    }
    const result = number * base;



  return loading ? (
    "loadig..."
  ) : (
    <div className={styles.converter}>
        <input
            placeholder="Введите значение"
            type="number"
            value={number}
            onChange={changeNumber}
        />

        <select value={base} onChange={changeCurrency}>
            {qoutes.map(quote => (
                <option key={quote} value={quote}>{quote}</option>
            ))}
        </select>
        <div>base valute: "{base}"</div>
       <div> RESULT = {result} </div>
    </div>

  );
}

export default Converter;
