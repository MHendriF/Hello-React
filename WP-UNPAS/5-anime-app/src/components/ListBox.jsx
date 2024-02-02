import { useState } from "react";
import AnimeList from "./AnimeList";

export default function ListBox({animes, onSelectedAnime}) {
    const [isOpen1, setIsOpen1] = useState(true);

    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
                {isOpen1 ? '–' : '+'}
            </button>
            {isOpen1 && (
               <AnimeList animes={animes} onSelectedAnime={onSelectedAnime}/>
            )}
        </div>
    );
}