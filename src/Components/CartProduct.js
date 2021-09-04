// Components
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { Grid } from "@material-ui/core";

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

export default function CartProduct(props) {
    var { product, listCart, setListCart } = props

    var price = product.promotionPrice ? product.promotionPrice : product.price;
    price = price * product.quantity;

    return (
        <Grid container spacing={3} >
            <Grid item xs={3}>
                <img src={product.image} width="100%" />
            </Grid>
            <Grid item xs={9}>
                {product.name} | {product.quantity} | {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                <DeleteForeverOutlinedIcon onClick={e => removeProduct(product, listCart, setListCart)} />
            </Grid>
        </Grid>
    )
}