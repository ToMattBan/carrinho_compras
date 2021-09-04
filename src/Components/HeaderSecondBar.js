// React
import { useState } from 'react';

// Components
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { List, ListItem } from '@material-ui/core';
import Cart from './Cart.js';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

// Theme
import { globalStyles, headerStyles } from "./ComponentStyle.js"


export default function HeaderSecondBar(props) {
    var { listCart, setListCart, totalValue, setTotalValue } = props;
    const globalClasses = globalStyles();
    const headClasses = headerStyles();

    const [isOpen, setIsOpen] = useState(false);
    window.setCartOpen = setIsOpen;

    return (
        <Toolbar className={headClasses.headerToolbars}>
            <div className={globalClasses.gutter}>
                <div className={headClasses.headerSearchFather}>
                    <InputBase
                        placeholder="O que você procura?"
                        classes={{
                            root: headClasses.headerSearchRoot,
                            input: headClasses.headerSeachInput,
                        }}
                        inputProps={{ 'aria-label': 'procure' }}
                    />
                    <div className={headClasses.headerSearchIcon}>
                        <SearchIcon />
                    </div>
                </div>

                <div>
                    <List className={headClasses.headerNavbar}>
                        <ListItem button component="a" href="#">Camisetas</ListItem>
                        <ListItem button component="a" href="#">Calças</ListItem>
                        <ListItem button component="a" href="#">Blusas</ListItem>
                        <ListItem button component="a" href="#">Vestidos</ListItem>
                        <ListItem button component="a" href="#">
                            <ShoppingCart onClick={e => setIsOpen(isOpen === false ? true : false)} />
                        </ListItem>
                    </List>

                    <Cart isOpen={isOpen} setIsOpen={setIsOpen} listCart={listCart} setListCart={setListCart} totalValue={totalValue} setTotalValue={setTotalValue} />
                </div>
            </div>
        </Toolbar>
    )
}