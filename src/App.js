import PageListProducts from "./Components/PageListProducts";
import Header from './Components/Header';
import { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as HashRouter } from "react-router-dom";

function App() {
  const [listCart, setListCart] = useState('[]');
  const [totalValue, setTotalValue] = useState(0.00)

  return (
    <div>
      <HashRouter basename={window.location.pathname}>
        <Header listCart={listCart} setListCart={setListCart} totalValue={totalValue} setTotalValue={setTotalValue} />

        <Switch>

          <Route path="" exact
            render={(props) => <PageListProducts {...props} listCart={listCart} setListCart={setListCart} totalValue={totalValue} setTotalValue={setTotalValue} />}
          />

          <Route
            render={(props) => <PageListProducts {...props} listCart={listCart} setListCart={setListCart} totalValue={totalValue} setTotalValue={setTotalValue} />}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
