import Products from "./Assets/products.json"

function App() {
  return (
    <div>
      {Products.map((product, index) => (
        <h4 key={product.Id}>
          <div>Id - { product.Id }</div>
          <div>img - { product.img }</div>
          <div>Url - { product.Url }</div>
          <div>Name - { product.Name }</div>
          <div>Price - { product.Price }</div>
        </h4>
      ))}
    </div>
  );
}

export default App;
