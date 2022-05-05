import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eudys Medina </span>
            but everyone calls me <span className="purple">Edward </span>
            like my dad which neither is his name, his name it's eudis actually! 😵
            But without the "Y". Yes a little weird, 😅 but that's the history how basically
            i thought my real name was "eduardito" until i was 6 years old.😂
            I was born and grew up in <span className="purple"> Baní</span>, a small town of <span className="purple"> Dominican Republic.</span>
            <br />I am freelance software developer lover of science, the cosmos, technology, animals (i currently have 5 cats 😻) and good cuisine! 👨‍💻🌌👨‍🍳.
            <br />
            <br />
            I'm an proficient Full-Stack Developer who loves working with <span className="purple">problem-solving</span> and <span className="purple">analytical skills</span>,
            clean coding standards and highly interactive web development, disciplinary rules and procedures to set the
            behavior standards expected of me at work, proactive attitude & detail-oriented with high time management
            skills qualities. I like to use top modern frameworks like <span className="purple">NextJS</span> (react framework), <span className="purple">React, Redux-toolkit, Bootstrap</span> and so on.
            <br />
            <br />
            Besides from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping 🏕️
            </li>
            <li className="about-activity">
              <ImPointRight /> cooking 👨‍🍳
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Anyone who has never made a mistake has never tried anything new."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
