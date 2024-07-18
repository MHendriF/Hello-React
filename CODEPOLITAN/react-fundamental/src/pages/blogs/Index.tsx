import { Link, useLoaderData } from "react-router-dom";

type PostProps = {
  id: string;
  title: string;
  body: string;
};

export default function BlogPage() {
  const posts = useLoaderData() as PostProps[];

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
