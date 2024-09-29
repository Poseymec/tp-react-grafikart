

//import '../styles/App.css';

import ProduitTable from './ProduitTable';
import SearchBar from './SearchBar';
import {Produit} from '../datas/Produit'
import { useState } from 'react';

function App() {
  const [search ,setSearch]= useState()

  const [showstock, setShowStock] = useState(false)

  const visible = Produit.filter(product =>{
    if(showstock && !product.stocked)
    {
      return false
    }
    if(search && !product.name.includes(search))
      {
        return false 
      }
      return true
  })




return <div className='container my-3'>
        <SearchBar showstock={showstock} onStockOnChange={setShowStock} search={search} onSearchChange={setSearch}/>
        <ProduitTable produits={visible}/>
      </div>

  
}


export default App;
