// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Avatar, List, ListItem } from '@material-ui/core';

// Icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

// Theme
import { globalStyles, headerStyles } from "./ComponentStyle.js"

export default function Header() {
    const globalClasses = globalStyles();
    const headClasses = headerStyles();

    const path = "/carrinho_compras"

    return (
        <AppBar className={headClasses.header}>
            <Toolbar className={headClasses.headerToolbars}>
                <div className={globalClasses.gutter}>
                    <a href={path} className={headClasses.headerLogoTitle}>
                        <Typography variant="h6" noWrap>
                            Lojenha Onlaine
                        </Typography>
                    </a>

                    <a href={`${path}/user`} className={headClasses.headerUserSpace}>
                        <span>Mathias</span>
                        <Avatar>M</Avatar>
                    </a>
                </div>
            </Toolbar>

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
                            <ListItem button component="a" href={`${path}/camisas`}>Camisetas</ListItem>
                            <ListItem button component="a" href={`${path}/calcas`}>Calças</ListItem>
                            <ListItem button component="a" href={`${path}/blusas`}>Blusas</ListItem>
                            <ListItem button component="a" href={`${path}/vestidos`}>Vestidos</ListItem>
                            <ListItem button component="a" href={`${path}/cart`}>
                                <ShoppingCart />
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}