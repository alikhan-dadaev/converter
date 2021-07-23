import React, {useEffect} from "react";
import styles from "./exchange.module.css";
import {useSelector} from "react-redux";

function ExchangeRates(props) {
    const loading = useSelector(state => state.rates.loading);
    const dollar = useSelector(state => state.rates.USD);
    const euro = useSelector(state => state.rates.EUR);
    const byn = useSelector(state => state.rates.BYN);



  return (
      loading ? 'loading...' : (
          <div className={styles["rates-block"]}>
              <h1>Курс валют</h1>
              <div className={styles.base}>Базова валюта: <span>₽</span></div>
              <div className={styles.rates}>
                  <div className={styles.dollar}>
                      <div className={styles['valute-title']}>
                          <span>Курс USD</span>
                         <div className={styles.value}>{dollar.Value}</div>
                          <div className={styles['valute-name']}>({dollar.Name})</div>
                      </div>
                  </div>
                  <div className={styles.euro}>
                      <div className={styles['valute-title']}>
                          <span>Курс EUR</span>
                          <div className={styles.value}>{euro.Value}</div>
                          <div className={styles['valute-name']}>({euro.Name})</div>
                      </div>
                  </div>
                  <div className={styles.byn}>
                      <div className={styles['valute-title']}>
                          <span>Курс BYN</span>
                          <div className={styles.value}>{byn.Value}</div>
                          <div className={styles['valute-name']}>({byn.Name})</div>
                      </div>
                  </div>


              </div>

          </div>
      )
    );

}

export default ExchangeRates;
