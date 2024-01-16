import { useState } from "react";
import axios from "axios";

function SearchWord() {
  
  const [word, setWord] = useState(null);
  const [result, setResult] = useState(null);


  function handleSearch(event) {
    event.preventDefault();
  }

  function handleWord(event) {
    setWord(event.target.value);
  }

  function search() {
    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
    axios.get(dictionaryApiUrl).then(response => {
      setResult(response.data[0]);
    })
  }
  
  return (
    <>
      <div className="SearchWord">
        <h1>What word would you like to search?</h1>
        <form onSubmit={handleSearch}>
          <input type="search" placeholder="search for a word" onChange={handleWord}/>
        </form>
        <small>ie: code, coffee, computer</small>
      </div>
    </>
  );
}

export default SearchWord;