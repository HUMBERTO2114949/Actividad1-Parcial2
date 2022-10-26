
import './App.css';
import FilterableProductTable from './componentes/Filtro.js'

const PRODUCTS = [
  {category: 'consola', price: '$490.99', stocked: true, name: 'Xbox One'},
  {category: 'Videojuegos', price: '$9.99', stocked: true, name: 'Halo CE'},
  {category: 'Videojuegos', price: '$29.99', stocked: false, name: 'Halo reach'},
  {category: 'Electronicos', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronicos', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronicos', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
  return (
    <div className="container">
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;