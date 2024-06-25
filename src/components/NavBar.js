import React from "react";

import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function NarBar() {
  return (
    <ul className="navbar">
      <li title="Visit my linkedIn" className="linkedIn">
        <a href="https://www.linkedin.com/in/aquinones2000/" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin
            className="linkedInIcon"
            size="2rem"
            color="0077b5 "
          />
        </a>
      </li>
      <li className="resume">
        <a
          title="Download my Resume"
          href={require("./items/Resume_Angel_Quinones.pdf")}
          target="_blank" rel="noreferrer"
        >
          <HiOutlineDocumentDownload
            className="resumeIcon"
            size="2rem"
            color="0077b5 "
          />
        </a>
      </li>
    </ul>
  );
}
