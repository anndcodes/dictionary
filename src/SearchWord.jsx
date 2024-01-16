function SearchWord() {
  
  return (
    <>
      <div className="SearchWord">
        <h1>What word would you like to search?</h1>
        <form>
          <input type="search" placeholder="search for a word"/>
        </form>
        <small>ie: code, coffee, computer</small>
      </div>
    </>
  );
}

export default SearchWord;