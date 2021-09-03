// Theme
import { globalStyles } from "./ComponentStyle.js"
import { productsStyle } from "./ComponentStyle.js"

export default function Products(props) {
    let product = props.product;
    let { id, image, url, name, price, promotionPrice } = product;

    price = parseFloat(price);
    promotionPrice = parseFloat(promotionPrice);

    var globalClasses = globalStyles();
    var productClasses = productsStyle();

    return (
        <div id={id} className={productClasses.productFather}>
            <a href={url} className={productClasses.productAnchor}>
                <img src={image} width="100%" height="100%"/>
                <div>{name}</div>
                <div>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                {
                    promotionPrice ?
                        <div>{promotionPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                        : ''
                }
            </a>
        </div>
    )
}