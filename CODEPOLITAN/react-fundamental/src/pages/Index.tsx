import { posts } from "../posts";
import Article from "../components/Article";

export default function HomePage() {
  return (
    <div>
      <h1>Simple Blog</h1>
      {posts.map((post) => (
        <Article key={post.id} title={post.title} tags={post.tags} date={post.date} />
      ))}
    </div>
  );
}
