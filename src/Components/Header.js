import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import useStyles from "./ComponentStyle.js"

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.headerToolbars}>
                <Typography className={classes.headerLogoTitle} variant="h6" noWrap>
                    Lojenha Online
                </Typography>
                <div className={'_df'}>
                    <span>Mathias</span>
                    <Avatar style={{backgroundColor: 'greeen'}}>M</Avatar>
                </div>
            </Toolbar>
            <Toolbar className={classes.headerToolbars}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
}