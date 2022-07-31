export default function Titles({ info, setInfo }) {
  return (
    <div className="titles-background">
      <h1 className="name">Angel Quinones</h1>
      <h2 className="title">{info.title}</h2>
      <h3 className="quote">{info.quote}</h3>
    </div>
  );
}
