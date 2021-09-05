// Components
import { Grid } from "@material-ui/core";

// Icons
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// Theme
import { cartStyles } from "./ComponentStyle.js"

function removeProduct(product, listCart, setListCart, totalValue, setTotalValue) {
    listCart = JSON.parse(listCart);

    var price = product.promotionPrice ? product.promotionPrice : product.price;
    var productTotalValue = 0;

    for (let i = 0; i < listCart.length; i++) {
        var actualProduct = listCart[i];

        if (actualProduct.id === product.id) {
            productTotalValue = price * product.quantity;
            listCart.splice(i, 1);
            listCart = JSON.stringify(listCart);
            setListCart(listCart);

            break
        }
    }

    setTotalValue(totalValue - productTotalValue);
}

function changeQuantity(product, listCart, setListCart, totalValue, setTotalValue, operation) {
    var actualQuantity = product.quantity;
    var newQuantity = operation === 'plus' ? actualQuantity + 1 : actualQuantity - 1;
    var price = product.promotionPrice ? product.promotionPrice : product.price;

    if (newQuantity == 0) {
        removeProduct(product, listCart, setListCart);
    } else {
        listCart = JSON.parse(listCart);

        for (let i = 0; i < listCart.length; i++) {
            var actualProduct = listCart[i];

            if (actualProduct.id === product.id) {
                actualProduct.quantity = newQuantity;
                product.quantity = newQuantity;

                let newValue = operation === 'plus' ? totalValue + parseFloat(price) : totalValue - parseFloat(price)
                setTotalValue(newValue);

                listCart = JSON.stringify(listCart);
                setListCart(listCart);

                break
            }
        }
    }
}

export default function CartProduct(props) {
    var { product, listCart, setListCart, totalValue, setTotalValue } = props
    const cartClasses = cartStyles();

    var price = product.promotionPrice ? product.promotionPrice : product.price;

    return (
        <Grid container spacing={3} className={cartClasses.productListed}>
            <Grid item xs={3}>
                <img src={product.image} width="100%" />
            </Grid>
            <Grid item xs={9} className={cartClasses.productDetails}>
                <div className={cartClasses.productName}>
                    {product.name}
                </div>

                <div>
                    <span>Quantidade:</span>
                    <span className={cartClasses.productQuantity}>
                        <RemoveIcon onClick={e => changeQuantity(product, listCart, setListCart, totalValue, setTotalValue, 'minus')} />
                        <span>{product.quantity}</span>
                        <AddIcon onClick={e => changeQuantity(product, listCart, setListCart, totalValue, setTotalValue, 'plus')} />
                    </span>
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

                <DeleteForeverOutlinedIcon
                    className={cartClasses.removeProductIcon}
                    onClick={e => removeProduct(product, listCart, setListCart, totalValue, setTotalValue)}
                />
            </Grid>
        </Grid>
    )
}