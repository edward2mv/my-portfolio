import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CoinGator"
              description=" Cryptocurrency Finance Price Tracker App Using Hooks and Axios. This Frontend web application using React and the cryptocurrency API called Coingecko, in addition to the Bootstrap framework. This project was born as an idea, in order to practice with a simple project and also understand some APIs from the world of cryptocurrencies."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Avatar Punks DApp"
              description="AvatarPunks is an NFT marketplace created from data stored entirely on the blockchain and displayed through an application deployed on a decentralized file system."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="My Personal site & portfolio"
              description="My personal portfolio edme.tech which features some of my github projects as well as my resume and technical skills.

This project was built using these technologies:

React.js
Node.js
Express.js
CSS3
VsCode
Vercel"
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Udenfy, Inc."
              description="Udenfy, Inc. is a marketing agency and training platform specializing in e-commerce.
              This project was built using these technologies:

WordPress
Elementor
Gatsby.js
React.js
backbone.js
MySQL
PHP.
"
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel Club Rolling Stone"
              description="Clubrollingstone.com , is a family-run hotel located in Boca Chica.
              This project was built using these technologies:

WordPress
Vue.js
CSS3
MySQL
PHP.
"
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Simona beauty salon"
              description="Salonsimona.com , is a WordPress site.
              This project was built using these technologies:

WordPress
Elementor
CSS3
MySQL
PHP.
"
              link="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
