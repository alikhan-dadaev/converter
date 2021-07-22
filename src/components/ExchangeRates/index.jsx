import React from "react";
import styles from "./exchange.module.css";
import { useSelector } from "react-redux";

function ExchangeRates(props) {
  const valueDollar = useSelector((state) => state.rates.valute.USD);
  const valueEuro = useSelector((state) => state.rates.valute.EUR);
  const valueBYN = useSelector((state) => state.rates.valute.BYN);
  const rates = useSelector(state => state.rates.valute);




  console.log(rates)

  console.log (valueDollar)
  console.log (valueEuro)
  console.log (valueBYN)


  return (
        <div className={styles["rates-block"]}>
          <h1>Курс валют</h1>
          <div className={styles.rates}>
            <div className={styles.dollar}>
              <div className={styles['dollar-title']}>

              </div>
            </div>
            <div className={styles.euro}>
              <div className={styles['euro-title']}>

              </div>
            </div>
            <div className={styles.euro}>
              <div className={styles['byn-title']}>

              </div>
            </div>
          </div>
        </div>
    );

}

export default ExchangeRates;
