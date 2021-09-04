import PageListProducts from "./Components/PageListProducts";
import Header from './Components/Header';
import { useState } from "react";

function App() {
  const [listCart, setListCart] = useState('[]');

  return (
    <div>
      <Header listCart={listCart} setListCart={setListCart} />
      <PageListProducts listCart={listCart} setListCart={setListCart} />
    </div>
  );
}

export default App;
