
import { useEntries } from "../../hooks/api.js";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const data = useEntries();

  const navigate = useNavigate();
  return (
    <>
      <h1>Travel D-ari 🗒</h1>

      <h2>🏏🏄 Últimas entradas 🤿🎣:</h2>

      <button 
      className="btnHome" 
      onClick={(e) => {
        e.preventDefault();  
        navigate("/entries");
      }}
    >
      Registrar entrada bb
    </button>


      <div id="home">
        {data?.data.map((entrie) => (
          <li key={entrie.id}>
            <div className="entrada">
              <h3>{entrie.title}</h3>
              <p>{entrie.place}</p>
              <p>{entrie.createdAt}</p>
              <img 
                src={`https://travel-diary-api.anxoso.com/uploads/${entrie.photos[0]?.name}`}
                
              />
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Home;
