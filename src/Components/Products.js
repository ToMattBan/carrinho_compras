// Theme
import { Button } from "@material-ui/core";
import { productsStyle } from "./ComponentStyle.js"

export default function Products(props) {
    let product = props.product;
    let { id, image, url, name, price, promotionPrice } = product;

    price = parseFloat(price);
    promotionPrice = parseFloat(promotionPrice);

    const path = "/carrinho_compras"

    var productClasses = productsStyle();

    return (
        <div id={id} className={productClasses.productFather}>
            <a href={`${path}/${url}`} className={productClasses.productAnchor}>
                <img src={image} alt={name} width="100%" />
                <div>{name}</div>
                <div>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                {
                    promotionPrice ?
                        <div>{promotionPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                        : ''
                }
            </a>
            <Button variant="contained" className={productClasses.productAddCart}>
                Adicionar ao carrinho
            </Button>
        </div>
    )
}