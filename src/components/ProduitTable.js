import ProduitCategorieRow from "./produits/ProduitCategorieRow"
import ProduitRow from "./produits/ProduitRow"

function ProduitTable({produits})
{

    const rows= []
    let lastCategory= null

    for(let product of produits)
    {
        if(product.category !== lastCategory)
        {
            rows.push(<ProduitCategorieRow key={product.category} name={product.category}/>)

        }
        lastCategory=product.category
        rows.push(<ProduitRow product={product} key={product.name}/>)
    }
    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}

export default ProduitTable