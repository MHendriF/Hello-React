import { postsData } from "../posts";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState(postsData);
  const onSearchChange = (value: string) => {
    const filteredPosts = postsData.filter((item) => {
      return item.title.includes(value);
    });
    setPosts(filteredPosts);
    console.log("🚀 ~ onSearchChange ~ onSearchChange:", value);
  };

  return (
    <div>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map(({ title, tags, date }, index) => (
        <Article key={index} {...{ title, tags, date }} />
      ))}
    </div>
  );
}
