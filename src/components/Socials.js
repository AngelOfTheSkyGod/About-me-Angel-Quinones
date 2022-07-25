function FacebookLink() {
  return (
    <div>
      <a target="_blank" href="https://www.facebook.com/angel.quinones.946">
        <img className="Facebook" src={require("./images/Facebook.png")} />
      </a>
    </div>
  );
}

function InstagramLink() {
  return (
    <div>
      <a
        target="_blank"
        href="https://www.instagram.com/angel.quinones.946/?hl=en"
      >
        <img className="Instagram" src={require("./images/Instagram.png")} />
      </a>
    </div>
  );
}

export default function Socials() {
  const page = (
    <footer className="Footer">
      <FacebookLink />
      <InstagramLink />
    </footer>
  );
  return page;
}
