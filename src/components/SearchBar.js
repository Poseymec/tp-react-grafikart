import Input from "./form/Input"
import Check from "./form/Check"

function SearchBar({showStock ,onStockOnChange, search,onSearchChange })
{


    return <div>
        <div className="mb-3">
            <Input value={search} onChange={onSearchChange} placeholder='Recherche...'/>
            <Check id="stocked" checked={showStock} onChange={onStockOnChange} label="Afficher uniquement les produits en stock"/>
        </div>
    </div>

}

export default SearchBar