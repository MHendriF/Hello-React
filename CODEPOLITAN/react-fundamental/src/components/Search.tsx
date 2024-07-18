import React, { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState<string>("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Cari Article:{" "}
        <input onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => searchKeyDown(e)} type="text" />
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata "{search}"
      </small>
    </>
  );
}
