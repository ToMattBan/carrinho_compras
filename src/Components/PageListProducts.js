// Data
import productsList from "../Assets/products.json"

// Components
import Products from "./Products.js";
import Filtros from "./Filtros.js";
import { Grid } from "@material-ui/core";

// Theme
import { globalStyles } from "./ComponentStyle.js"
import { pageListProductsStyles } from "./ComponentStyle.js"

export default function PageProducts(props) {
    var { listCart, setListCart, totalValue, setTotalValue } = props;
    var globalClasses = globalStyles();
    var plpClasses = pageListProductsStyles();

    return (
        <div className={`${globalClasses.gutter} ${plpClasses.container}`}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Filtros />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={3}>
                        {productsList.map((product, index) => (
                            <Grid item xs={6} sm={4} lg={3} key={index}>
                                <Products product={product} listCart={listCart} setListCart={setListCart} totalValue={totalValue} setTotalValue={setTotalValue} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}