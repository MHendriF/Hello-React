const ArticleStatus = ({ isNew }: any) => {
  return isNew && <span> *postingan baru!</span>;
};

const NewArticle = () => {
  return <span> * baru!</span>;
};

export default function Article({ ...props }: any) {
  const { title, date, tags, isNew } = props;
  return (
    <>
      <h3>{title}</h3>
      <small>
        Date : {date}, tags : {tags.join(", ")}
        <ArticleStatus isNew={isNew} />
        {isNew && <NewArticle />}
      </small>
    </>
  );
}
