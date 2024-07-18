import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      <h2>My Blog Posts</h2>
      {posts.map(({ id, title }, index) => (
        <div key={index}>
          <Link to={`/blog/${id}`}>- {title}</Link>
        </div>
      ))}
    </div>
  );
}
