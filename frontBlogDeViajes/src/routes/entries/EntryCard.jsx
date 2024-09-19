import { useParams } from "react-router-dom";
import { useEntry } from "../../hooks/api.js";

export const EntryCard = () => {
  const { id } = useParams();
  const data = useEntry(id);

  return (
    <li className="entry">
      <div className="entrada">
        <h3>{data.data.title}</h3>
        <p>{data.data.place}</p>
        <p>{data.data.createdAt}</p>
        <img
          src={
            file
              ? `https://travel-diary-api.anxoso.com/uploads/${entry.photos[0]?.name}`
              : "/assets/img/HAB.jpg"
          }
        />
      </div>
    </li>
  );
};
