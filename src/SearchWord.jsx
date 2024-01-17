import { useState } from "react";
import axios from "axios";
import Word from "./Word.jsx";

function SearchWord(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [result, setResult] = useState(null);
  const [load, setLoad] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleWord(event) {
    setWord(event.target.value);
  }

  function search() {
    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(dictionaryApiUrl).then((response) => {
      setResult(response.data[0]);
      setLoad(true);
    });
  }

  if (load) {
    return (
      <>
        <header className="SearchWord">
          <h1>What word would you like to search?</h1>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="search for a word"
              onChange={handleWord}
            />
          </form>
          <small>ie: code, coffee, computer</small>
        </header>

        <main className="dictionary">
          <Word result={result} />
        </main>
      </>
    );
  } else {
    search();
    return "Searching";
  }
}

export default SearchWord;
