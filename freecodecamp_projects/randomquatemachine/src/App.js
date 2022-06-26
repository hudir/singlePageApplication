import { useEffect, useState } from 'react';
import './App.css';

const random = num => Math.floor(Math.random()*num)

function App() {
  const [quote, setQuote] = useState({quotes:['quote-box','quote-box','quote-box', 'quote-box','quote-box','quote-box'],index:null, author:['who','are','you', 'she', 'he', "me"]})
  useEffect(()=>{
    setQuote(prev=>({...prev, index:random(prev.quotes.length)}))
  }, []);

  const newQuote = e => {
    let newIndex = random(quote.quotes.length)
    while(newIndex === +quote.index){
      newIndex = random(quote.quotes.length)
    }
    setQuote(p=>({...p, index:newIndex}))
  } 


  return (
    <div className="App" id='quote-box'>
      <header className="App-header" id='quote-box'>      
        <p id="text">{quote.quotes[quote.index]}</p>
        <span id="author">{quote.author[quote.index]}</span>
        <button id="new-quote" onClick={newQuote}>new-quote</button>
        <a id="tweet-quote" target="_blank" href={'https://twitter.com/intent/tweet/'+quote.quotes[quote.index]}>tweet-quote</a>      
      </header>
    </div>
  );
}

export default App;
