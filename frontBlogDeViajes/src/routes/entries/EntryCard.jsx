import { useParams } from "react-router-dom";
import { useEntry } from "../../hooks/api.js";

export const EntryCard = () => {
    const { id } = useParams();
    const data = useEntry(id);

    return (
        <li className="entry">
            <div className="entrada">
                <h3>{data?.data.title}</h3>
                <p>{data?.data.place}</p>
                <p>{data?.data.createdAt}</p>
                <img src={data?.data.photos[0]} />
            </div>
        </li>
    );
};
