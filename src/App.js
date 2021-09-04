import PageListProducts from "./Components/PageListProducts";
import Header from './Components/Header';
import { useState } from "react";

function App() {
  const [listCart, setListCart] = useState('[]');
  const [totalValue, setTotalValue] = useState(0.00)

  return (
    <div>
      <Header listCart={listCart} setListCart={setListCart} totalValue={totalValue} setTotalValue={setTotalValue} />
      <PageListProducts listCart={listCart} setListCart={setListCart} totalValue={totalValue} setTotalValue={setTotalValue} />
    </div>
  );
}

export default App;
