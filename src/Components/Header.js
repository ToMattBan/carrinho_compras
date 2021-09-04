// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import HeaderSecondBar from './HeaderSecondBar.js';

// Theme
import { globalStyles, headerStyles } from "./ComponentStyle.js"

export default function Header(props) {
    var { listCart, setListCart } = props;
    const globalClasses = globalStyles();
    const headClasses = headerStyles();

    return (
        <AppBar className={headClasses.headerFather}>
            <Toolbar className={headClasses.headerToolbars}>
                <div className={globalClasses.gutter}>
                    <a href="#" className={headClasses.headerLogoTitle}>
                        <Typography variant="h6" noWrap>
                            Lojenha Onlaine
                        </Typography>
                    </a>

                    <a href="#" className={headClasses.headerUserSpace}>
                        <span>Mathias</span>
                        <Avatar>M</Avatar>
                    </a>
                </div>
            </Toolbar>

            <HeaderSecondBar listCart={listCart} setListCart={setListCart} />
        </AppBar>
    );
}