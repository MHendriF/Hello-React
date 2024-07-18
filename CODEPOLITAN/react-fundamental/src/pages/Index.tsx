import { postsData } from "../posts";
import Article from "../components/Article";
import Search from "../components/Search";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value: string) => {
    const filteredPosts = postsData.filter((item) => {
      return item.title.includes(value);
    });
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  return (
    <div>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => (
        <Article key={index} {...{ title, tags, date, isNew }} />
      ))}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </div>
  );
}
