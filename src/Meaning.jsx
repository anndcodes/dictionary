import "./Meaning.css"

function Meaning(props) {
  return (
    <>
      {props.meaning.definitions.map(function (definition, index) {
        if (index <= 2) {
          return (
            <div key={index} className="definition-box">
              <h3 className="definition-title">{props.meaning.partOfSpeech}</h3>
              <p className="definition">{definition.definition}</p>
            </div>
          );
        } else {
          null;
        }
      })}
    </>
  );
}

export default Meaning;
