import React from "react";
import Pokemons from "./page/Pokemons";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Pokemons />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
