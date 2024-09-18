import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://travel-diary-api.anxoso.com/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const data = await res.json();
    console.log(`He recibio:`, {
      email: email,
      password: password,
    });

    if (!res.ok) {
      setError(true);
    } else {
      setEmail(data.email);
      setPassword(data.password);
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
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button onClick={handleRegister}>Registrarme</button>

        {error && <p>El usuario ya existe</p>}
      </form>
    </div>
  );
}

export default Register;
