// Theme
import { Button } from "@material-ui/core";
import { productsStyle } from "./ComponentStyle.js"

export default function Products(props) {
    let product = props.product;
    let { id, image, url, name, price, promotionPrice } = product;

    price = parseFloat(price);
    promotionPrice = parseFloat(promotionPrice);

    var productClasses = productsStyle();

    return (
        <div id={id} className={productClasses.productFather}>
            <a href="#" className={productClasses.productAnchor}>
                <img src={image} alt={name} width="100%" />
                <div className={productClasses.productName}>{name}</div>
                
                <div className={productClasses.productPrices}>
                    <div className={promotionPrice ? productClasses.productOldPrice : ''}>
                        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </div>
                    
                    {
                        promotionPrice ?
                        <div>{promotionPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                        : ''
                    }

                </div>
            </a>
            <Button variant="contained" className={productClasses.productAddCart}>
                Adicionar ao carrinho
            </Button>
        </div>
    )
}