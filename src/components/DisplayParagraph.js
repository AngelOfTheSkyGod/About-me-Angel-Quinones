export default function DisplayParagraph(props) {
  console.log(props);
  return (
    <div className="paragraph-container">
      <h1 className="p-title">{props.title}</h1>
      <h2 className="p-body">{props.body}</h2>
    </div>
  );
}
