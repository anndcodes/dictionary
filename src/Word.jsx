import Meaning from "./Meaning.jsx";
import "./Word.css"

function Word(props) {
  return (
    <>
      <section className="word-phonetic">
        <h2 className="word">{props.result.word}</h2>
        <h3 className="phonetic">
          {props.result.phonetics[1].text.slice(1, -1)}
        </h3>
      </section>

      <section className="meanings">
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Word;
