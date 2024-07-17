export default function Article({ ...props }: any) {
  const { title, date, tags } = props;
  return (
    <>
      <h3>{title}</h3>
      <small>
        Date : {date}, tags : {tags.join(", ")}
      </small>
    </>
  );
}
