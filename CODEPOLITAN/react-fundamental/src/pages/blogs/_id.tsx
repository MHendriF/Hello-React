import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailBlogPage() {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}
