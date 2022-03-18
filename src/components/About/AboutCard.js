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
            like my dad which neither is his name, his name is also Eudis! 😵
            But without the "Y". Yes a little weird, 😅 but that's the history how basically
            i thought my real name was "eduardito" until i was 6 years old.😂
            I was born and grew up in <span className="purple"> Baní, a small town of Dominican Republic.</span>
            <br />I am freelance software developer.  lover of science, the cosmos, technology, and good cuisine! 👨‍💻🌌👨‍🍳.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
