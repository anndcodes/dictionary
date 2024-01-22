import Meaning from "./Meaning.jsx";
import "./Word.css";

function Word(props) {
  if (props.result.phonetics[1]) {
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
  } else if (props.result.phonetics.length === 0) {
    return (
      <>
        <section className="word-phonetic">
          <h2 className="word">{props.result.word}</h2>
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
  } else {
    return (
      <>
        <section className="word-phonetic">
          <h2 className="word">{props.result.word}</h2>
          <h3 className="phonetic">
            {props.result.phonetics[0].text.slice(1, -1)}
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
}

export default Word;
