import React from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Submit:", formData);

    const res = await fetch(
      "https://travel-diary-api.anxoso.com/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const data = await res.json();
    console.log("Recibí:", formData);

    if (!res.ok) {
      setError(true);
    } else {
      setFormData(data);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div id="register" className="page">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>
          <span>Email:</span>
          <input
            value={email}
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword({ ...password, password: e.target.value })
            }
          />
        </label>

        <button onClick={handleRegister}>Registrarme</button>

        <button type="button" onClick={handleReset}>
          Limpiar
        </button>

        {error && <p>El usuario ya existe</p>}
      </form>
    </div>
  );
}

export default Register;
