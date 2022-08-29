import React from "react";
import Links from "./Links";

function About({bio, githubLink, linkedInLink}) {
  function renderBio(bio) {
    if(bio) return <p>{bio}</p>
    else return
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {renderBio(bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={[githubLink, linkedInLink]}/>
    </div>
  );
}

export default About;
