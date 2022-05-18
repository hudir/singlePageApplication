import './style.css';
import React,{useState}  from 'react'
import CarCard from './CarCard';

let carsData = [
  {brand: "BMW", model:"X5",img:"./images/bmw-x5.png"},
  {brand: "Ford", model:"Galaxy",img:"./images/ford-galaxy.jpeg"},
  {brand: "Kia", model:"Sportage",img:"./images/kia-sportage.jpg"}
]


function App() {
  const [cars, setCars] = useState(carsData)
  
  return (
    <div className="App">
      <CarCard data = {cars}/>
      <button onClick={e => cars.length===0 ? setCars(carsData) : setCars([])}>{cars.length===0 ? 'Show Cards' : 'Clear Cards'} </button>
    </div>
  )
}

export default App;
