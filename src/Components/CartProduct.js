// Components
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Grid } from "@material-ui/core";

// Theme
import { cartStyles } from "./ComponentStyle.js"

function removeProduct(product, listCart, setListCart) {
    listCart = JSON.parse(listCart);

    for (let i = 0; i < listCart.length; i++) {
        var actualProduct = listCart[i];

        if (actualProduct.id === product.id) {
            listCart.splice(i, 1);
            listCart = JSON.stringify(listCart);
            setListCart(listCart);

            break
        }
    }
}

function changeQuantity(product, listCart, setListCart, operation) {
    var actualQuantity = product.quantity;
    var newQuantity = operation === 'plus' ? actualQuantity + 1 : actualQuantity - 1;

    if (newQuantity == 0) {
        removeProduct(product, listCart, setListCart);
    } else {
        listCart = JSON.parse(listCart);

        for (let i = 0; i < listCart.length; i++) {
            var actualProduct = listCart[i];

            if (actualProduct.id === product.id) {
                actualProduct.quantity = newQuantity;
                product.quantity = newQuantity;
                console.log(listCart);
                listCart = JSON.stringify(listCart);
                setListCart(listCart);

                break
            }
        }
    }

}

export default function CartProduct(props) {
    var { product, listCart, setListCart } = props
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
                        <RemoveIcon onClick={e => changeQuantity(product, listCart, setListCart, 'minus')} />
                        <span>{product.quantity}</span>
                        <AddIcon onClick={e => changeQuantity(product, listCart, setListCart, 'plus')} />
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
                    onClick={e => removeProduct(product, listCart, setListCart)}
                />
            </Grid>
        </Grid>
    )
}