import AddProduct from "./conponents/AddProduct";
import Form from "./conponents/Form";
import Product from "./conponents/Product";


function App() {
  const list = [{
    name: 'xbox',
    photo: "https://source.unsplash.com/random/100x100",
    price: 400
  },
  {
    name: 'PS5',
    photo: "https://source.unsplash.com/random/100x100",
    price: 450
  },
  {
    name: 'iphone',
    photo: "https://source.unsplash.com/random/100x100",
    price: 450
  },
  {
    name: 'ipad',
    photo: "https://source.unsplash.com/random/100x100",
    price: 450
  },
  {
    name: 'PC',
    photo: "https://source.unsplash.com/random/100x100",
    price: 450
  }]

  return (
    <div className="App">
        {list.map((el,i)=> (<Product key={i} product={el} />))}
        <Form />
        <AddProduct />
    </div>
  );
}

export default App;
