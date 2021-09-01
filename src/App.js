import './App.scss';
import Products from "./Assets/products.json"

function App() {
  return (
    <div>
      {Products.map(product => (
        <p>
          <div>Id - { product.Id }</div>
          <div>img - { product.img }</div>
          <div>Url - { product.Url }</div>
          <div>Name - { product.Name }</div>
          <div>Price - { product.Price }</div>
        </p>
      ))}
    </div>
  );
}

export default App;
