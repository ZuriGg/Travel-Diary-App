import { useUser } from "../../UserContext.jsx";
import { useState } from "react";
import "./NewEntry.css";

export const NewEntry = () => {
  const [user] = useUser();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Subiendo:", file);

    const fd = new FormData();
    fd.append("image", file);
    fd.append("title", title);
    fd.append("place", place);
    fd.append("description", description);

    const res = await fetch("https://travel-diary-api.anxoso.com/entries", {
      method: "POST",
      headers: { Authorization: user.token },
      body: fd,
    });
    const json = await res.json();
    setSuccess(json);
  };

  return (
    <div id="new-entry">
      <h1 className="titleNewEntry">Agrega una nueva entrada makina</h1>

      <form className="formNewEntry" onSubmit={handleSubmit}>
        <label>
          {preview ? (
            <img className="image-preview" src={preview} />
          ) : (
            <div className="add-image" />
          )}
          <input type="file" accept="image/*" name="" onChange={handleFile} />
        </label>
        <p>Nombre</p>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>Lugar</p>
        <input
          type="text"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
        <p>Descripción</p>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">Agregar entrada tt</button>
      </form>
      {success && (
        <div>
          Imagen subida con éxito!
          <br />
          <a href={success.url} target="_blank" rel="noreferrer">
            {" "}
            {success.url}
          </a>
        </div>
      )}
    </div>
  );
};
