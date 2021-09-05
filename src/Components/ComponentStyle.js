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
        overflow: 'hidden',

        [theme.breakpoints.up('sm')]: {
            padding: '0 32px',
        },

        [theme.breakpoints.up('md')]: {
            padding: '0 64px',
        },
    }
}));

const headerStyles = makeStyles((theme) => ({
    headerFather: {
        backgroundColor: 'inherit',
        position: 'sticky !important',
        top: '0',
    },

    headerToolbars: {
        padding: '8px 0 !important',
        minHeight: '30px !important',

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
        padding: '8px 12px !important',
        width: '100% !important',
    },

    headerNavbar: {
        display: 'flex',
        padding: '0 !important',
        marginRight: '-12px !important',
    },

    headerCategories: {
        display: 'flex',

        [theme.breakpoints.down('sm')]: {
            display: 'none !important',
        },

        '&, *': {
            color: themeConfig.colors.secundary,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
        },
    },
}));

const pageListProductsStyles = makeStyles((theme) => ({
    container: {
        margin: '24px auto',

        [theme.breakpoints.up('sm')]: {
            margin: '32px auto',
        },

        [theme.breakpoints.up('md')]: {
            margin: '64px auto',
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
            transform: 'rotate(10deg)',
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
        [theme.breakpoints.up('md')]: {
            borderRight: `solid 1px ${themeConfig.colors.divisories}`,
        },

        [theme.breakpoints.down('sm')]: {
            paddingBottom: '8px',
            borderBottom: `solid 1px ${themeConfig.colors.divisories}`,
        },
    },

    filtersOrigin: {
        fontSize: '20px',
        fontWeight: "bold",
    },

    filterCapsule: {
        [theme.breakpoints.up('md')]: {
            marginTop: '24px',
        },
    },

    filtersName: {
        fontWeight: "bold",
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            cursor: 'pointer',
        },

        '& > svg': {
            marginLeft: '4px',

            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    },

    filterContent: {
        [theme.breakpoints.down('sm')]: {
            maxHeight: '0',
            overflow: 'hidden',
            animation: 'all 0.4s'
        },
    },

    filterContentOpen: {
        maxHeight: '200px',
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
        minWidth: 'calc(375px - 32px)',
        maxWidth: '600px',
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
        fontWeight: 'bold',

        '& > *': {
            fontSize: '30px',
        },
    },

    cartCloseIcon: {
        cursor: 'pointer',
        padding: '4px',
    },

    productList: {
        flex: '30',
        overflowX: 'hidden',
        overflowY: 'auto',
        margin: '24px 0',
        scrollbarColor: 'transparent transparent',

        '&::-webkit-scrollbar': {
            backgroundColor: 'transparent',
        },
    },

    productListed: {
        borderBottom: `solid 1px ${themeConfig.colors.divisories}`,
        marginBottom: '8px !important',

        '& > div': {
            paddingBottom: '8px !important',
        },

        '&:last-child': {
            border: 'none',
        }
    },

    productDetails: {
        position: 'relative',

        '& > div:not(:first-child)': {
            margin: '12px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    },

    productName: {
        textAlign: 'center',
        fontSize: '18px',
    },

    productQuantity: {
        flex: '1',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',

        '& > span': {
            width: '50px',
            textAlign: 'center'
        },

        '& > svg': {
            cursor: 'pointer',
        },
    },

    removeProductIcon: {
        position: 'absolute',
        top: '8px',
        right: '8px',
        cursor: 'pointer'
    },

    cartBottom: {
        flex: 1,
    },

    totalValue: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    cartFinalizePurchase: {
        textDecoration: 'none',

        '& > button': {
            backgroundColor: themeConfig.colors.primary,
            color: themeConfig.colors.secundary,
            textTransform: 'capitalize',
            marginTop: '12px',
            width: '100%',

            '&:hover': {
                backgroundColor: themeConfig.colors.terciary,
            },
        },
    },
}))

const endShop = makeStyles((theme) => ({
    tankyouTitle: {
        margin: '32px 0 !important',
        textAlign: 'center',
    },

    tankyouText: {
        marginBottom: '32px',
        
        textAlign: 'center',
        lineHeight: '1.5',
    },

    detailsShip: {
        paddingTop: '8px',
        paddingBottom: '16px',

        '& > *': {
            padding: '0 !important',
        },

        '& span': {
            margin: '0 4px'
        }
    },

    productListed: {
        borderBottom: `solid 1px ${themeConfig.colors.divisories}`,

        '& > div': {
            paddingBottom: '8px !important',
        },
    },

    productDetails: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        '& > div:not(:first-child) > div': {
            margin: '12px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    },

    productName: {
        textAlign: 'center',
        fontSize: '18px',
    },
}))

export {
    globalStyles,
    headerStyles,
    pageListProductsStyles,
    productsStyle,
    filterStyle,
    cartStyles,
    endShop,
}