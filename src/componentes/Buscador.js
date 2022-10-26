import React from 'react'


const SearchBar=(props)=> {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;
  
  return (
    <form>
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={filterText}
        onChange={e => props.onFilterTextChange(e.target.value)} 
       
      />
      <p>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={e => props.onInStockChange(e.target.checked)}
         
        />
        <span >
          -Solo productos en stock
        </span>
      </p>
    </form>
  );
}
export default SearchBar