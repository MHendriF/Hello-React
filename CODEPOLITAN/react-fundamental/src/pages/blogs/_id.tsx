import { useLoaderData } from "react-router-dom";

type PostProps = {
  id: string;
  title: string;
  body: string;
};

export default function DetailBlogPage() {
  const post = useLoaderData() as PostProps;

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}
