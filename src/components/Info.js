function LinkedIn() {
  return (
    <a
      target="_blank"
      className="linkedInLink"
      href="https://www.linkedin.com/in/angel-quinones-a70958207/"
    >
      <img className="LinkedInPicture" src={require("./images/Linkedin.png")} />
    </a>
  );
}

function Email() {
  return (
    <a
      target="_blank"
      className="EmailLink"
      href="mailto:quinonesangel2000@gmail.com?subject = Feedback&body = Message"
    >
      <img className="EmailPicture" src={require("./images/Email.png")} />
    </a>
  );
}

export default function Info() {
  const page = (
    <div>
      <h1 className="Name">Angel Quinones</h1>
      <h2 className="Role">Aspiring Full Stack Developer</h2>
      <h3 className="Quote">People's dreams never end</h3>
      <LinkedIn />
      <Email />
    </div>
  );
  return page;
}
