import React, { useState } from "react";
import "./styles.css";
import { MovieList } from "./MovieList";

export default function App() {
  const [val, setVal] = useState();
  const movieTitle = (event) => {
    const cur = event.currentTarget;
    setVal(cur.value);
  };
  return (
    <div className="App">
      <input onChange={movieTitle} />
      {val && val.length === 4 && <MovieList year={val} />}
    </div>
  );
}
