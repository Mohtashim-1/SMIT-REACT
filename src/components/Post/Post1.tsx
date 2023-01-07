import React from "react";
import Nav from "../Nav/Nav";
import "./Post.css";
import { Link } from "react-router-dom";
import Admission from "../Admission/Admission";

const Post1 = () => {
  return (
    <>
      <h1>Coarse Details</h1>
      <h1>Branding Workshop</h1>
      <img src="../pic/Post01.jpg" alt="post-1" />
      <br />
      <br />
      <br />
      <p>
        Dear Youth of Karachi, SMIT has organized another practical workshop for
        all of you to enhance your skills & become entrepreneur in the field of
        Graphic Designing on Sunday, 1st Jan 2023 at 12pm Sharp. Entry will be
        possible only on the basis of first come first serve. It is an advice
        for all of you to reach at least 15 minutes before given timeline. Stay
        Connected with us to get enrollment in our upcoming courses.
        <br />
        #SupportSaylani
        <br />
        #SpreadSaylani
        <br />
        #FreeEducationForAll
        <br />
        #LetsBuildPakistantogether
        <br />
        #skilldevelopment <br />
        #entrepreneurship
        <br />
        #pakistanithubinshallah
        <br />
        #brandingdesign
        <br />
      </p>
      {/* <Link className="btn btn-primary" to="../Admission/Admission.tsx">
        Admission
      </Link> */}
      <Link className="btn btn-primary" to="./Admission/Admission.tsx">
                Details
              </Link>
              <a href="./Admission/Admission.tsx">go somewhere</a>
    </>
  );
};

export default Post1;
