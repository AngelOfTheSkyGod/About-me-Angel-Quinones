import React from "react";

import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FaProjectDiagram } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";

export default function NarBar() {
  return (
    <ul className="navbar">
      <li title="Visit my linkedIn" className="linkedIn">
        <a href="https://www.linkedin.com/in/aquinones2000/" target="_blank">
          <AiOutlineLinkedin
            className="linkedInIcon"
            size="2rem"
            color="0077b5 "
          />
        </a>
      </li>
      <li className="projects">
        <a
          title="View my projects"
          href={require("./items/Resume_Angel_Quinones.pdf")}
          target="_blank"
        >
          <FaProjectDiagram
            className="resumeIcon"
            size="2rem"
            color="0077b5 "
          />
        </a>
      </li>
      <li className="resume">
        <a
          title="Download my Resume"
          href={require("./items/Resume_Angel_Quinones.pdf")}
          target="_blank"
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
