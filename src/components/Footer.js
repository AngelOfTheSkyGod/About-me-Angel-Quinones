import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
export default function Footer() {
  return (
    <ul className="footer">
      <li className="facebook">
        <a href="https://www.facebook.com/angel.quinones.946" target="_blank">
          <AiFillFacebook
            className="facebookIcon"
            size="2rem"
            color="#918E9B "
          />
        </a>
      </li>
      <li className="github">
        <a
          title="Visit my github!"
          href="https://github.com/AngelOfTheSkyGod"
          target="_blank"
        >
          <AiFillGithub className="githubIcon" size="2rem" color="#918E9B " />
        </a>
      </li>
      <li className="instagram">
        <a
          href="https://www.instagram.com/angel.quinones.946/?hl=en"
          target="_blank"
        >
          <AiFillInstagram
            className="instagramIcon"
            size="2rem"
            color="#918E9B "
          />
        </a>
      </li>
      <li className="resume">
        <a
          title="email"
          href="mailto:quinonesangel2000@gmail.com?subject = Feedback&body = Message"
          target="_blank"
        >
          <MdOutlineMarkEmailUnread
            className="emailIcon"
            size="2rem"
            color="#918E9B "
          />
        </a>
      </li>
    </ul>
  );
}
