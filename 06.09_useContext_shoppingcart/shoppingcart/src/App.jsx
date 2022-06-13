import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div>

      <h1 className="my-5 text-center text-primary">There-is-a-Shop</h1>
      <div className="row">
        <div className="col-9"> <ProductList className='prod'/></div>
        <div className="col-3"> <ShoppingCart className='cart'/></div>
      </div>

      <ToastContainer
          position="bottom-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
               
     
    </div>
  );
}

export default App;
