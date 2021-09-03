// Data
import productsList from "../Assets/products.json"

// Components
import Products from "./Products.js";
import { Grid } from "@material-ui/core";

// Theme
import { globalStyles } from "./ComponentStyle.js"
import { pageListProductsStyles } from "./ComponentStyle.js"

export default function PageProducts() {
    var globalClasses = globalStyles();
    var plpClasses = pageListProductsStyles();

    return (
        <div className={`${globalClasses.gutter} ${plpClasses.container}`}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    HEHEHEHE
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={3}>
                        {productsList.map((product, index) => (
                            <Grid item xs={6} sm={4} md={3} key={index}>
                                <Products product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}