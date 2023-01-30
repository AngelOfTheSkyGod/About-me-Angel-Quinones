export default function Header(props) {
  return (
    <div>
      <div>
        <h1>Angel Quinones</h1>
      </div>
      <ul>
        <li>
          <a href="https://angeloftheskygod.github.io/About-me-Angel-Quinones/">
            <h1>Bio</h1>
          </a>
        </li>
        <li>
          <a href="https://angeloftheskygod.github.io/About-me-Angel-Quinones/Projects/">
            <h1>Projects</h1>
          </a>
        </li>
        <li>
          <a href={require("./items/Resume_Angel_Quinones.pdf")}>
            <h1>Resume</h1>
          </a>
        </li>
      </ul>
    </div>
  );
}
