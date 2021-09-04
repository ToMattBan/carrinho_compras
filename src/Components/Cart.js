// Components
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import CartProduct from './CartProduct.js';
import { Button } from '@material-ui/core';
import { useState } from 'react';

// Theme
import { cartStyles } from "./ComponentStyle.js"

export default function Cart(props) {
    var { listCart, setListCart, totalValue, setTotalValue } = props;
    const cartClasses = cartStyles();

    return (
        <div className={`${cartClasses.cartFather} ${props.isOpen ? cartClasses.cartFatherOpen : ''}`}>
            <div className={cartClasses.cartHeader}>
                <ShoppingBasketOutlinedIcon />
                CARRINHO
                <CloseOutlinedIcon className={cartClasses.cartCloseIcon} onClick={e => props.setIsOpen(props.isOpen === false ? true : false)} />
            </div>

            <div className={cartClasses.productList}>
                {JSON.parse(listCart).map((product, index) => (
                    <CartProduct key={index} product={product} listCart={listCart} setListCart={setListCart} />
                ))}
            </div>

            <div className={cartClasses.cartBottom}>
                <div className={cartClasses.totalValue}>
                    <span>Valor Total</span>
                    <span>
                        {totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                </div>
                <Button variant="contained" className={cartClasses.cartFinalizePurchase}>
                    Finalizar compra
                </Button>
            </div>
        </div>
    )
}