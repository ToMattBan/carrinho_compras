// Theme
import { Button } from "@material-ui/core";
import { productsStyle } from "./ComponentStyle.js"

function addToCart(product, listCart, setListCart, totalValue, setTotalValue) {
    var actualList = JSON.parse(listCart);

    var alreadyHave = false;

    for (let i = 0; i < actualList.length; i++) {
        var actualProduct = actualList[i];

        if (actualProduct.id === product.id) {
            alreadyHave = true;
            product.quantity = product.quantity + 1;
            actualProduct.quantity = actualProduct.quantity + 1;
            break;
        }
    }

    if (alreadyHave === false) {
        product.quantity = 1
        actualList.push(product);
    }

    var productTotalPrice = parseFloat(product.promotionPrice ? product.promotionPrice : product.price);

    setTotalValue(totalValue + productTotalPrice)

    var actualList = JSON.stringify(actualList);
    setListCart(actualList); 

    window.setCartOpen(true);
}

export default function Products(props) {
    var { product, listCart, setListCart, totalValue, setTotalValue } = props;
    let { id, image, name, price, promotionPrice } = product;

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
            <Button variant="contained" className={productClasses.productAddCart} onClick={e => addToCart(product, listCart, setListCart, totalValue, setTotalValue)}>
                Adicionar ao carrinho
            </Button>
        </div>
    )
}