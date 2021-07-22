import {Route} from "react-router-dom";
import ExchangeRates from "./ExchangeRates";
import Converter from "./Converter";
import HeaderNav from "./HeaderNav";
import styles from "../styles.css";
import {loadRates} from "../redux/ratesReducer/action";
import {useEffect} from "react";
import {useDispatch} from "react-redux";


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRates())
    }, [])

  return (
      <div className="app">
          <div className="header">
            <HeaderNav />
          </div>
          <Route exact path="/exchangeRates">
            <ExchangeRates />
          </Route>
          <Route path="/converter">
            <Converter />
          </Route>

        </div>
  );
}

export default App;
