import { useState } from "react";
import NumResult from "./NumResult";

export default function Search({animes}) {
    const [query, setQuery] = useState('');

    return (
        <div className="search-container">
            <input className="search" type="text" placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <NumResult animes={animes} />
        </div>
    );
}