import style from "./style.css";
import Image from "./components/Image";
import Background from "./components/Background";
import Footer from "./components/Footer";

import React from "react";
export default function App() {
  const [info, setInfo] = React.useState({
    title: "Aspiring Full Stack Developer",
    quote: "People's dreams... Never end!",
  });
  return (
    <div className="container">
      <div className="background">
        <Image />
        <Background info={info} setInfo={setInfo} />
        <Footer />
      </div>
    </div>
  );
}
