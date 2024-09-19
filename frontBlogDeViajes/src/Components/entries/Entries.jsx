import { Link } from "react-router-dom";
import { useEntries } from "../../hooks/api.js";

export const Entries = ({ file }) => {
    const data = useEntries();
    return (
        <>
            {data?.data.map((entry) => (
                <Link to={`entries/${entry.id}`} key={entry.id}>
                    <div className="entrada">
                        <h3>{entry.title}</h3>
                        <p>{entry.place}</p>
                        <p>{entry.createdAt}</p>
                        <img
                            src={`https://travel-diary-api.anxoso.com/uploads/${entry.photos[0]?.name}`}
                        />
                    </div>
                </Link>
            ))}
        </>
    );
};

export default Entries;
