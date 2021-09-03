import { makeStyles } from '@material-ui/core/styles';

const themeConfig = {
    colors: {
        primary: '#000',
        secundary: '#fff',
        terciary: '#535353',
    },

    shape :{
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
    header: {
        backgroundColor: 'inherit',
        position: 'sticky',
        top: '0'
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
            opacity: '0.9'
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
        marginTop: '24px',

        [theme.breakpoints.up('sm')]: {
            marginTop: '32px',
        },

        [theme.breakpoints.up('md')]: {
            marginTop: '64px',
        },
    }
}))

export {globalStyles, headerStyles, pageListProductsStyles}