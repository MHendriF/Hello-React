import { useState } from "react";
import AnimeDetail from "./AnimeDetail";

export default function SelectedBox({selectedAnime}) {
    const [isOpen2, setIsOpen2] = useState(true);

    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
                {isOpen2 ? '–' : '+'}
            </button>
            {isOpen2 && <AnimeDetail selectedAnime={selectedAnime}/>}
        </div>
    );
}