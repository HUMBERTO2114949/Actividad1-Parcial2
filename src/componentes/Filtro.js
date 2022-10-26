import React from 'react'
import SearchBar from './Buscador'
import ProductTable from './productos/ProductosTabla.js'


const FilterableProductTable =(props)=> {
  const [filterText, setFilterText] = React.useState(""); 
  const [inStockOnly, setInStockOnly] = React.useState(false);
  
  return (
    <div >
      <h1>Productos</h1>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}  
        onFilterTextChange={text => setFilterText(text)}
        onInStockChange={stock => setInStockOnly(stock)}
      />
      <ProductTable 
        products={props.products} 
        filterText={filterText}
        inStockOnly={inStockOnly} 
      />
    </div>
  );
}



export default FilterableProductTable

  
  





