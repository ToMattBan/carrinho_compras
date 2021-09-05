// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import HeaderSecondBar from './HeaderSecondBar.js';
import { Link } from 'react-router-dom';

// Theme
import { globalStyles, headerStyles } from "./ComponentStyle.js"

export default function Header(props) {
    var { listCart, setListCart, totalValue, setTotalValue } = props;
    const globalClasses = globalStyles();
    const headClasses = headerStyles();

    return (
        <AppBar className={headClasses.headerFather}>
            <Toolbar className={headClasses.headerToolbars}>
                <div className={globalClasses.gutter}>
                    <Link to={`/`} className={headClasses.headerLogoTitle}>
                        <Typography variant="h6" noWrap>
                            Lojenha Onlaine
                        </Typography>
                    </Link>

                    <a href="#" className={headClasses.headerUserSpace}>
                        <span>Mathias</span>
                        <Avatar>M</Avatar>
                    </a>
                </div>
            </Toolbar>

            <HeaderSecondBar listCart={listCart} setListCart={setListCart} totalValue={totalValue} setTotalValue={setTotalValue} />
        </AppBar>
    );
}