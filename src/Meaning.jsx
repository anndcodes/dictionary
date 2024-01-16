function Meaning(props) {
  return (
    <>
      {props.meaning.definitions.map(function (definition, index) {
        if(index <=2) {
          return (
            <div key={index}>
              <h3>{props.meaning.partOfSpeech}</h3>
              {definition.definition}
            </div>
          ); 
        } else {
          null
        }
      })}
    </>
  )
}

export default Meaning;