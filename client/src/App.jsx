import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  // Set initial state for quote and author
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const urlWithProxy = "/api/v1";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => {
        const randomQuote = res.data[0]; // Adjust this if your API response structure changes
        setQuote(randomQuote.q); // Set the quote
        setAuthor(randomQuote.a); // Set the author
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
    <header>
      <h1>Echoes of Inspiration</h1>
    </header>
      <main>
      <div className="quote">
    { quote?null: <p>Press on the Button to Echo an Inspiration</p> }
      {quote && <h2>"{quote}"</h2>}
      {author && <h3>- {author}</h3>}
      </div>
      <button onClick={getDataFromServer}>Get Quote</button>
      </main>
    </>
  );
}

export default App;
