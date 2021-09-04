// Components
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

// Theme
import { cartStyles } from "./ComponentStyle.js"

export default function Cart(props) {
    const cartClasses = cartStyles();

    return (
        <div className={`${cartClasses.cartFather} ${props.isOpen ? cartClasses.cartFatherOpen : ''}`}>
            <div>
                <div className={cartClasses.cartHeader}>
                    <ShoppingBasketOutlinedIcon />
                    CARRINHO
                    <CloseOutlinedIcon className={cartClasses.cartCloseIcon} onClick={e => props.setIsOpen(props.isOpen === false ? true : false)}/>
                </div>

                <div>
                    Imagem
                    Nome | Quantidade | Preço total
                    Remover do Carrinho
                </div>
            </div>

            <div>
                Parte de baixo.
                Valor Total Carrinho
                Finalizar compra
            </div>
        </div>
    )
}