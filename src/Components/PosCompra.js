// Components
import { Typography } from "@material-ui/core";
import { useState } from "react";

// Themes
import { endShop } from "./ComponentStyle";

export default function PosCompra(props) {
    var { listCart, setListCart, totalValue } = props;
    const tanksClasses = endShop();

    const [productsBuyed, setProductsBuyed] = useState(JSON.parse(listCart));
    const [totalBuyed, setTotalBuyed] = useState(totalValue);
    setListCart('[]');

    return (
        <div>
            <Typography variant="h4" noWrap className={tanksClasses.tankyouText}>
                Obrigado por sua compra
            </Typography>

            {productsBuyed.map((product) => (
                1
            ))}

            {totalBuyed}
        </div>
    )
}