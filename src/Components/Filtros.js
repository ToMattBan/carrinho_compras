// Components
import { List, ListItem } from '@material-ui/core';

// Theme
import { filterStyle } from "./ComponentStyle.js"

export default function PageProducts() {
    var filters = [
        {
            name: '',
            options: [
                "Todos os Produtos",
                "Lançamentos"
            ]
        },
        {
            name: 'Gênero',
            options: [
                "Feminino",
                "Masculino"
            ]
        },
        {
            name: 'Categorias',
            options: [
                "Blusas",
                "Calças",
                "Jaquetas",
                "Casacos",
                "Colares",
                "Brincos",
            ]
        },
        {
            name: 'Preço',
            options: [
                "Menos de R$50,00",
                "Entre R$50,00 e $99,99",
                "Entre R$100,00 e $149,99",
                "Entre R$150,00 e $199,99",
                "Entre R$200,00 e $249,99",
                "Entre R$250,00 e $299,99",
                "Mais de R$300,00",
            ]
        },
    ];

    var filterClasses = filterStyle();

    return (
        <div>
            {filters.map((filter, index) => (
                <List>
                    {filter.name}
                    {
                        filter.options.map((option, index) => (
                            <ListItem button>{option}</ListItem>
                        ))
                    }
                </List>
            ))}
        </div >
    )
}