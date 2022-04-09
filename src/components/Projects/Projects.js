import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import soon from "../../Assets/Projects/soon.jpg";

import coingator from "../../Assets/Projects/coingator.png";
import movies from "../../Assets/Projects/movies.png";
//import ava from "../../Assets/Projects/avapunks.jpg";
import portfolio from "../../Assets/Projects/porfolio.png";
import udenfy from "../../Assets/Projects/udenfy.PNG";
import rollingstone from "../../Assets/Projects/rollingstone.png";
import simona from "../../Assets/Projects/simona.png";

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
{/* COINGATOR APP */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coingator}
              isBlog={false}
              title="CoinGator React Native App"
              description="A simple react native app that shows the market capitalization of the top 100 cryptocurrencies.
              This project was built using these technologies:

React Native,
Expo,
React.js,
CoinGecko Rest API.
"
              link="https://github.com/edward2mv/coingator-react-native"
            />
          </Col>
{/* MOVIES REACTION APP */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movies Reaction"
              description="AvatarPunks is an NFT marketplace created from data stored entirely on the blockchain and displayed through an application deployed on a decentralized file system.
              This project was built using these technologies:

React,
React-Router,
react-query,
TMDB Rest API.
"
              link="#https://github.com/edward2mv/movie-api-react"
            />
          </Col>
{/*PORTFOLIO */}

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Personal site & portfolio"
              description="My personal portfolio edme.tech which features some of my github projects as well as my resume and technical skills.

This project was built using these technologies:

React.js,
Node.js,
Express.js,
CSS3,
VsCode,
Vercel."
              link="http://edme.tech/"
            />
          </Col>
{/* UDENFY */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udenfy}
              isBlog={false}
              title="Udenfy, Inc."
              description="Udenfy, Inc. is a marketing agency and training platform specializing in e-commerce.
              This project was built using these technologies:

WordPress,
Elementor,
Gatsby.js,
React.js,
MySQL,
PHP.
"
              link="https://udenfy.com/"
            />
          </Col>
{/* HCRS */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rollingstone}
              isBlog={false}
              title="Hotel Club Rolling Stone"
              description="Clubrollingstone.com , is a family-run hotel located in Boca Chica.
              This project was built using these technologies:

WordPress,
Vue.js,
CSS3,
MySQL,
PHP.
"
              link="https://clubrollingstone.com/"
            />
          </Col>
{/* SIMONA */}

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={simona}
              isBlog={false}
              title="Salón Simona"
              description="Salonsimona.com , is a WordPress site.
              This project was built using these technologies:

WordPress,
Elementor,
CSS3,
MySQL,
PHP.
"
              link="http://salonsimona.com/"
            />
          </Col>
{/* AVAPunks */}

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={soon}
              isBlog={false}
              title="Avatar Punks Web3 DApp (Under Development...)"
              description={["AvatarPunks is an NFT marketplace created from data stored entirely on the blockchain and displayed through an application deployed on a decentralized file system.",
              <br/>,<br/>," This project was built using these technologies: ",
              <ul>
                <li>Solidity</li>
                <li>Hardhat</li>
                <li>Web3.js</li>
                <li>web3-react</li>
                <li>IPFS</li>
                <li>Netlify.</li>
              </ul>,
                "..."]}


              link="#https://github.com/edward2mv/AvatarPunks"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
