function Word(props) {
  return (
    <>
      <div className="">
        <h2>{props.result.word}</h2>
        <h3>{props.result.phonetics[1].text.slice(1, -1)}</h3>
      </div>
    </>
  )
}

export default Word;