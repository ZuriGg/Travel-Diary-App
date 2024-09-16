import React from "react";
import { useEntries } from "../../hooks/api.js";
import "./Home.css";

function Home() {
  const data = useEntries();
  return (
    <>
      <h1>Travel D-ari</h1>
      <div id="home">
        {data?.data.map((entrie) => (
          <li key={entrie.id}>
            <div className="entrada">
              <h2>{entrie.title}</h2>
              <p>{entrie.place}</p>
              <p>{entrie.createdAt}</p>
              <img
                src={`https://travel-diary-api.anxoso.com/uploads/${entrie.photos[0].name}`}
                alt=""
              />
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Home;
