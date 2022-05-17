
import Header from './Header';
import User from './User';

function App(props) {
  // let keyArr= Object.keys(props)
  // console.log(props)
  // return (
  //   <div className="App">
  //     What are you doing!
  //     {
  //      keyArr.map(key=>(<div><span>{key}</span><span>{props[key]}</span></div>))    
  //     }
  //   </div>
  // );
  return (
    <div>
      <Header />
      <User />
    </div>
  )
}

export default App;
