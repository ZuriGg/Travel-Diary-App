//import { useState } from "react";
import Entries from "../../Components/entries/Entries.jsx";

import "./Home.css";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Travel D-ari 🗒</h1>

      <h2>🏏🏄 Últimas entradas 🤿🎣:</h2>

      <button
        className="btnHome"
        onClick={(e) => {
          e.preventDefault();
          navigate("/newEntry");
        }}
      >
        Registrar entrada bb
      </button>

      <div id="home">
        <Entries />
      </div>
    </>
  );
}

export default Home;
