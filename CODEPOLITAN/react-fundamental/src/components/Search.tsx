import React, { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState<string>("");

  const onSearchChange = (e: any) => {
    setSearch(e.target.value);
    props.onSearchChange(e.target.value);
  };

  return (
    <>
      <div>
        Cari Article: <input onChange={onSearchChange} type="text" />
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}
