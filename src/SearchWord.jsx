import { useState, useEffect } from "react";
import axios from "axios";
import Word from "./Word.jsx";
import "./SearchWord.css";
import { createClient } from "pexels";
import Images from "./Images.jsx";

function SearchWord(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [result, setResult] = useState(null);
  const [load, setLoad] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    search();
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleWord(event) {
    setWord(event.target.value);
  }

  function search() {
    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios
      .get(dictionaryApiUrl)
      .then((response) => {
        setResult(response.data[0]);
        setLoad(true);
        console.log(response.data[0]);
      })
      .catch((error) => {
        if (error.response.data) {
          setError(error.response.data);
        }
      });

    const pexelsApi = `https://api.pexels.com/v1/search/?query=${word}&per_page=9`;

    axios
      .get(pexelsApi, {
        headers: {
          Authorization:
            "QYrgFgpCJvuOiXWAPEsEy3OxVtHXRV9swH9ahJuJJvpkZH9UpmGYISS6",
        },
      })
      .then((response) => {
        setPhoto(response.data.photos);
      });
  }

  if (load) {
    if (error) {
      return (
        <div className="error">
          <p className="error-msg">{error.message}</p>
          <a href="../index.html" className="error-link">Back to home</a>
        </div>
      );
    } else {
      return (
        <div>
          <header className="SearchWord">
            <h1 className="title">What word would you like to search?</h1>
            <form onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="search for a word"
                onChange={handleWord}
              />
            </form>
            <span>ie: code, coffee, computer</span>
          </header>

          <main className="dictionary">
            <Word result={result} />
            <Images image={photo} />
          </main>
        </div>
      );
    }
  } else {
    return <p>Searching</p>;
  }
}

export default SearchWord;
