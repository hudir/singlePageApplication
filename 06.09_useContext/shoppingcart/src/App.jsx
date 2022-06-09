import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";


function App() {

  return (
    <div>

      <h1 className="my-5 text-center text-primary">Welcome to There-is-the-Shop</h1>
      <div className="row">
        <div className="col-7"> <ProductList className='prod'/></div>
        <div className="col-5"> <ShoppingCart className='cart'/></div>
      </div>
     
     
    </div>
  );
}

export default App;
