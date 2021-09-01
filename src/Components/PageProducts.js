// Data
import productsList from "../Assets/products.json"

// Components
import Products from "./Products.js";

// Theme
import { globalStyles } from "./ComponentStyle.js"

export default function PageProducts() {
    var globalClasses = globalStyles();

    return (
        <div className={globalClasses.gutter}>
            {productsList.map((product, index) => (
                <Products product={product} key={index} />
            ))}
        </div>
    )
}