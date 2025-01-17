import { useState } from "react";
import "./style/App.css";
import { quotes } from "./componentes/quotes";

function App() {
  // cria um estado currentQuote e uma função setCurrentQuote, para atualizar o estado
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  //quando clicar no button chamara essa função e atualizara o estado atual e
  // vai renderizar novamente
  const getQuote = () => {
    const indexRandom = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[indexRandom]);
  };
  return (
    <>
      <div className="container">
        <h1>{currentQuote.texto}</h1>
        <p>- {currentQuote.autor}</p>
        <div>
          <button onClick={getQuote}>Nova citação</button>
        </div>
      </div>
    </>
  );
}

export default App;
