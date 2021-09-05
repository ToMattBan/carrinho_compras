// Components
import { Grid } from "@material-ui/core";

// Themes
import { endShop } from "./ComponentStyle";

export default function ProductBuyed(props) {
    var { product } = props;

    var productClasses = endShop();

    var price = product.promotionPrice ? product.promotionPrice : product.price;

    return (
        <Grid container spacing={3} className={productClasses.productListed}>
            <Grid item xs={3}>
                <img src={product.image} width="100%" />
            </Grid>
            <Grid item xs={9} className={productClasses.productDetails}>
                <div className={productClasses.productName}>
                    {product.name}
                </div>

                <div>
                    <div>
                        <span>Quantidade:</span>
                        <span>{product.quantity}</span>
                    </div>

                    <div>
                        <span>Preço Un.:</span>
                        <span>
                            {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    </div>

                    <div>
                        <span>Preço Total:</span>
                        <span>
                            {(price * product.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}