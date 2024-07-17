import { posts } from "../posts";
import Article from "../components/Article";
import { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState<string>("");
  const onChangeSearch = (e: any) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Simple Blog</h1>
      <div>
        Cari Article: <input onChange={onChangeSearch} type="text" />
      </div>
      <small>Ditemukan 0 data dengan pencarian kata {search}</small>
      {posts.map(({ title, tags, date }, index) => (
        <Article key={index} {...{ title, tags, date }} />
      ))}
    </div>
  );
}
