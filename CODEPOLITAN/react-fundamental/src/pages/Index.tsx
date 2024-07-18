import { postsData } from "../posts";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value: string) => {
    const filteredPosts = postsData.filter((item) => {
      return item.title.includes(value);
    });
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  return (
    <div>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => (
        <Article key={index} {...{ title, tags, date, isNew }} />
      ))}
    </div>
  );
}
