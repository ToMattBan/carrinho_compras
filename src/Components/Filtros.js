// Components
import { List, ListItem } from '@material-ui/core';

// Theme
import { filterStyle } from "./ComponentStyle.js"

export default function PageProducts() {
    var filters = [
        {
            name: '',
            optionName: 'all',
            options: [
                "Todos os Produtos",
                "Lançamentos"
            ]
        },
        {
            name: 'Gênero',
            optionName: 'gender',
            options: [
                "Feminino",
                "Masculino"
            ]
        },
        {
            name: 'Categorias',
            optionName: 'category',
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
            optionName: 'price',
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
        <div className={filterClasses.filtersFather}>
            <div className={filterClasses.filtersOrigin}>Filtros</div>

            {filters.map((filter, index) => (
                <List key={index} >
                    <div className={filterClasses.filtersName}>{filter.name}</div>
                    {
                        filter.options.map((option, index) => (
                            <label htmlFor={`${filter.optionName}_${index}`} key={index} >
                                <ListItem button>
                                    
                                    <input type="radio" 
                                        name={filter.optionName} 
                                        id={`${filter.optionName}_${index}`} 
                                        className={filterClasses.filtersInputRadio}
                                    />

                                    {option}
                                </ListItem>
                            </label>
                        ))
                    }
                </List>
            ))}
        </div >
    )
}