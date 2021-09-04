// Components
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { Grid } from "@material-ui/core";
import { useState } from "react";

// Theme
import { cartStyles } from "./ComponentStyle.js"
import { Button } from '@material-ui/core';

export default function Cart(props) {
    const cartClasses = cartStyles();

    const [listCart, setListCart] = useState([]);
    window.listCart = listCart;
    window.setListCart = setListCart;

    return (
        <div className={`${cartClasses.cartFather} ${props.isOpen ? cartClasses.cartFatherOpen : ''}`}>
            <div className={cartClasses.cartHeader}>
                <ShoppingBasketOutlinedIcon />
                CARRINHO
                <CloseOutlinedIcon className={cartClasses.cartCloseIcon} onClick={e => props.setIsOpen(props.isOpen === false ? true : false)} />
            </div>

            <div className={cartClasses.productList}>
                {console.log('cart -->>>>>>>', listCart)}
                {
                    listCart.map((product, index) => (
                        <Grid container spacing={3} key={index}>
                            <Grid item xs={3}>
                                <img src={product.image} width="100%" />
                            </Grid>
                            <Grid item xs={9}>
                                {product.name} | {product.quantity} | {product.price * product.quantity}
                                <DeleteForeverOutlinedIcon />
                            </Grid>
                        </Grid>
                    ))
                }
            </div>

            <div className={cartClasses.cartBottom}>
                <div className={cartClasses.totalValue}>
                    <span>Valor Total</span>
                    <span>R$0,00</span>
                </div>
                <Button variant="contained" className={cartClasses.cartFinalizePurchase}>
                    Finalizar compra
                </Button>
            </div>
        </div>
    )
}