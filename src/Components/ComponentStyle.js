import { makeStyles } from '@material-ui/core/styles';

const themeConfig = {
    colors: {
        primary: '#000',
        secundary: '#fff',
        terciary: '#535353',
        divisories: '#d9cbcb',
    },

    shape: {
        borderRadius: {
            sm: '3px',
            default: '5px',
            big: '8px',
        }
    }
}

const globalStyles = makeStyles((theme) => ({
    gutter: {
        maxWidth: '1300px',
        margin: 'auto',
        padding: '0 12px',

        [theme.breakpoints.up('sm')]: {
            padding: '0 32px',
        },

        [theme.breakpoints.up('md')]: {
            padding: '0 64px',
        },

        [theme.breakpoints.up('lg')]: {
            padding: '0 128px',
        },
    }
}));

const headerStyles = makeStyles((theme) => ({
    headerFather: {
        backgroundColor: 'inherit',
        position: 'sticky',
        top: '0',
    },

    headerToolbars: {
        padding: '8px 0',
        minHeight: '30px',

        '&:first-child': {
            backgroundColor: themeConfig.colors.secundary,
            color: themeConfig.colors.terciary,
        },

        '&:last-child': {
            backgroundColor: themeConfig.colors.terciary,
            color: themeConfig.colors.secundary,
        },

        '& > div': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
        },
    },

    headerLogoTitle: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },

        color: themeConfig.colors.primary,
        textDecoration: 'none',
    },

    headerUserSpace: {
        color: themeConfig.colors.terciary,
        textDecoration: 'none',

        '&, > span': {
            display: 'flex',
            alignItems: 'center',
        },

        '& > span': {
            marginRight: '8px',
        },

        '& div': {
            width: '30px',
            height: '30px',
            fontSize: 'inherit',
            backgroundColor: 'green',
        },
    },

    headerSearchFather: {
        position: 'relative',
        borderRadius: themeConfig.shape.borderRadius.sm,
        backgroundColor: themeConfig.colors.secundary,
        color: themeConfig.colors.primary,
        marginLeft: 0,
        width: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '&:hover': {
            opacity: '0.9',
        },
    },

    headerSearchIcon: {
        padding: '0 8px',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
    },

    headerSearchRoot: {
        width: '100%',
    },

    headerSeachInput: {
        padding: '8px 12px',
        width: '100%',
    },

    headerNavbar: {
        display: 'flex',
        padding: 0,
        marginRight: '-16px',
    },
}));

const pageListProductsStyles = makeStyles((theme) => ({
    container: {
        margin: '24px 0',

        [theme.breakpoints.up('sm')]: {
            margin: '32px 0',
        },

        [theme.breakpoints.up('md')]: {
            margin: '64px 0',
        },
    },
}));

const productsStyle = makeStyles((theme) => ({
    productFather: {
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    productAnchor: {
        color: themeConfig.colors.primary,
        textDecoration: 'none',
        backgroundColor: 'transparent',
        fontSize: '18px',
    },

    productPrices: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '8px',
        alignItems: 'center',
    },

    productOldPrice: {
        fontSize: '12px',
        position: 'relative',

        '&:after': {
            content: '""',
            backgroundColor: 'red',
            position: 'absolute',
            width: 'calc(100% + 24px)',
            height: '2px',
            left: '-12px',
            top: '6px',
            rotate: '10deg',
        },
    },

    productAddCart: {
        backgroundColor: themeConfig.colors.primary,
        color: themeConfig.colors.secundary,
        textTransform: 'capitalize',
        marginTop: '12px',

        '&:hover': {
            backgroundColor: themeConfig.colors.terciary,
        }
    }
}));

const filterStyle = makeStyles((theme) => ({
    filtersFather: {
        borderRight: `solid 1px ${themeConfig.colors.divisories}`,
    },

    filtersOrigin: {
        fontSize: '20px',
        fontWeight: "bold",
    },

    filtersName: {
        fontWeight: "bold",
        marginTop: '24px',
    },

    filtersInputRadio: {
        margin: '0 4px 0 0',
    },
}))

const cartStyles = makeStyles((theme) => ({
    cartFather: {
        height: 'calc(100vh - 32px)',
        width: '30vw',
        padding: '16px',
        position: 'fixed',
        right: '0',
        top: '0',
        backgroundColor: '#eee',
        borderLeft: 'solid 2px',
        borderColor: themeConfig.colors.divisories,
        minWidth: '400px',
        transform: 'translateX(100%)',
        animation: 'all 0.5s ease-in-out',
        color: themeConfig.colors.primary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    cartFatherOpen: {
        transform: 'translateX(0%)',
    },

    cartHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
        flex: '1',
        
        '& > *': {
            fontSize: '30px',
        },
    },

    productList: {
        flex: '30',
        overflowX: 'hidden',
        overflowY: 'auto',
        margin: '24px 0',
    },

    cartCloseIcon: {
        cursor: 'pointer',
        padding: '4px',
    },

    cartBottom:{
        flex: 1,
    },

    totalValue: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    cartFinalizePurchase: {
        backgroundColor: themeConfig.colors.primary,
        color: themeConfig.colors.secundary,
        textTransform: 'capitalize',
        marginTop: '12px',
        width: '100%',

        '&:hover': {
            backgroundColor: themeConfig.colors.terciary,
        }
    },
}))

export {
    globalStyles,
    headerStyles,
    pageListProductsStyles,
    productsStyle,
    filterStyle,
    cartStyles,
}