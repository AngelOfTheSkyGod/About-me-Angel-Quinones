import Titles from "./Titles";
import NarBar from "./NavBar";
import Data from "./Data";
import DisplayParagraph from "./DisplayParagraph";
export default function Background({ info, setInfo }) {
  let paragraphs = Data.map((component) => {
    return <DisplayParagraph {...component} />;
  });

  return (
    <div className="black-bar-background">
      <Titles info={info} setInfo={setInfo} />
      <NarBar />
      {paragraphs}
    </div>
  );
}
