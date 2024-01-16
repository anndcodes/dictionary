import { useState } from "react";


function SearchWord() {
  
  const [word, setWord] = useState(null)


  function handleSearch(event) {
    event.preventDefault();
  }

  function handleWord(event) {
    setWord(event.target.value);
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