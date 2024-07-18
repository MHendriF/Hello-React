import { useContext } from "react";
import { GlobalContext } from "../context";

type ArticleProps = {
  title: string;
  date: string;
  tags: string[];
  isNew: boolean;
};

const ArticleStatus = ({ isNew }: any) => {
  return isNew && <span> *postingan baru!</span>;
};

const NewArticle = () => {
  return <span> * baru!</span>;
};

export default function Article({ ...props }: ArticleProps) {
  const { title, date, tags, isNew } = props;
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{title}</h3>
      <small>
        Date : {date}, tags : {tags.join(", ")}
        <ArticleStatus isNew={isNew} />
        {isNew && <NewArticle />}
      </small>
      <div>
        <small>Ditulis oleh {user.username}</small>
      </div>
    </>
  );
}
