// Components
import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { Redirect } from "react-router";

// Themes
import { endShop } from "./ComponentStyle";
import { globalStyles } from "./ComponentStyle.js"

// Components
import ProductBuyed from "./ProductBuyed";

export default function PosCompra(props) {
    var { listCart, setListCart, totalValue } = props;

    const tanksClasses = endShop();
    var globalClasses = globalStyles();

    const [productsBuyed, setProductsBuyed] = useState(JSON.parse(listCart));
    const [totalBuyed, setTotalBuyed] = useState(totalValue);
    setListCart('[]');

    window.setCartOpen(false);

    return (
        <div className={globalClasses.gutter}>

            {
                totalBuyed === 0 ?
                    <Redirect to="/" /> :

                    <div style={{marginBottom: '64px'}}>
                        <Typography variant="h4" className={tanksClasses.tankyouTitle}>
                            Obrigado por sua compra!
                        </Typography>

                        <div className={tanksClasses.tankyouText}>
                            <p>Obrigado por comprar na Lojenha Online! Estamos muito felizes em fazer parte da sua vida entregando sempre o melhor produto com a melhor qualidade possível! De nossos corações para a sua casa!</p>
                            <p>
                                <div>Seus dados de entrega cadastrados são:</div>
                                <Grid container spacing={3} className={tanksClasses.detailsShip}>
                                    <Grid item xs={12}>
                                        <span>Rua:</span>
                                        <span>Carlos Almeida</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span>Cidade:</span>
                                        <span>São Januário dos Santos</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span>Estado:</span>
                                        <span>Minas Gerais, MG</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <span>CEP:</span>
                                        <span>013568-98</span>
                                    </Grid>
                                </Grid>
                            </p>
                            <p>Seu pedido consiste dos seguintes produtos:</p>
                        </div>

                        <Grid container spacing={5}>
                            {productsBuyed.map((product) => (
                                <Grid item xs={12} md={6} lg={4}>
                                    <ProductBuyed product={product} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
            }
        </div>
    )
}