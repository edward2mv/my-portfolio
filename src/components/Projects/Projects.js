import React from "react";
import { Container, Row, Col, Badge} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



//Importing images
import soon from "../../Assets/Projects/soon.jpg";
import coingator from "../../Assets/Projects/coingator.png";
import movies from "../../Assets/Projects/movies.png";
//import ava from "../../Assets/Projects/avapunks.jpg";
import portfolio from "../../Assets/Projects/porfolio.png";
import udenfy from "../../Assets/Projects/udenfy.PNG";
import rollingstone from "../../Assets/Projects/rollingstone.png";
import simona from "../../Assets/Projects/simona.png";
import cynador from "../../Assets/Projects/cynador.png";
import iriatech from "../../Assets/Projects/iriatech.png";
import pktours from "../../Assets/Projects/pktours.png";
import movivoz from "../../Assets/Projects/movivoz.png";
import margot from "../../Assets/Projects/margot.png";
import medepilo from "../../Assets/Projects/medepilo.png";
//importing icons
import {SiSolidity, SiWeb3Dotjs, SiReact, SiIpfs,
  SiNetlify, SiExpo, SiReactrouter, SiReacttable,
  SiExpress, SiCss3, SiWordpress,SiWebflow,SiJquery, SiNextdotjs, SiPhp } from "react-icons/si";
import {FaElementor, FaHardHat,FaNodeJs,FaReact,FaVuejs } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import { MdOutlineHttp } from "react-icons/md";
import { GrMysql } from "react-icons/gr";


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
        {/* puntakanatours */}
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pktours}
              isBlog={false}
              title="Punta cana Tours "
              description="puntacanatours.com , is a WebFlow site.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWebflow />{" "}
                  Webflow
                </Badge>,
                <Badge>
                <SiJquery/>{" "}
                  jQUERY
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <TbApi/>{" "}
                  REST API
                </Badge>
                ]}
              link="https://www.excursionesenpuntacana.com/"
            />
          </Col>        {/* Medepilo */}
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={medepilo}
              isBlog={false}
              title="Medepilo"
              description="medepilo.com , is a WordPress site.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWordpress />{" "}
                  WordPress
                </Badge>,
                <Badge>
                <FaElementor />{" "}
                  Elementor
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <GrMysql/>{" "}
                  MySQL.
                </Badge>,
                <Badge >
                  <SiPhp/>{" "}
                  PHP.
                </Badge>
                ]}
              link="https://medepilo.com/"
            />
          </Col>
        {/* iriatech */}
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={iriatech}
              isBlog={false}
              title="Iriatech"
              description="iriatech.com , is a WordPress site.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWordpress />{" "}
                  WordPress
                </Badge>,
                <Badge>
                <FaElementor />{" "}
                  Elementor
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <GrMysql/>{" "}
                  MySQL.
                </Badge>,
                <Badge >
                  <SiPhp/>{" "}
                  PHP.
                </Badge>
                ]}
              link="https://iriatech.com/"
            />
          </Col>
        {/* Margot */}
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={margot}
              isBlog={false}
              title="Clínica estética Margot"
              description="clinicamargot.com , is a WordPress site.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWordpress />{" "}
                  WordPress
                </Badge>,
                <Badge>
                <FaElementor />{" "}
                  Elementor
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <GrMysql/>{" "}
                  MySQL.
                </Badge>,
                <Badge >
                  <SiPhp/>{" "}
                  PHP.
                </Badge>
                ]}
              link="https://clinicamargot.com/"
            />
          </Col>        {/* Cynador */}
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={cynador}
              isBlog={false}
              title="Cynador Agencia de Marketing Digital"
              description="Cynador.com , is a WordPress site.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWordpress />{" "}
                  WordPress
                </Badge>,
                <Badge>
                <FaElementor />{" "}
                  Elementor
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <GrMysql/>{" "}
                  MySQL.
                </Badge>,
                <Badge >
                  <SiPhp/>{" "}
                  PHP.
                </Badge>
                ]}
              link="https://cynador.com/"
            />
          </Col>
        {/* movivoz */}
<Col md={4} className="project-card">
            <ProjectCard
              imgPath={movivoz}
              isBlog={false}
              title="Movivoz Centralita Virtual Telefónica IP"
              description="movivoz.com , is a WordPress site.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWordpress />{" "}
                  WordPress
                </Badge>,
                <Badge>
                <FaElementor />{" "}
                  Elementor
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <GrMysql/>{" "}
                  MySQL.
                </Badge>,
                <Badge >
                  <SiPhp/>{" "}
                  PHP.
                </Badge>
                ]}
              link="https://movivoz.com/"
            />
          </Col>

{/* COINGATOR APP */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coingator}
              isBlog={false}
              title="CoinGator React Native App"
              description="A simple react native app that shows the market capitalization of the top 100 cryptocurrencies.
              This project was built using these technologies:
"
              techStack={[
                <Badge >
                <FaReact />{" "}
                  React Native
                </Badge>,
                <Badge>
                <SiExpo />{" "}
                  Expo
                </Badge>,
                <Badge>
                <AiFillApi />{" "}
                  CoinGecko Rest API.
                </Badge>
                ]}
              link="https://github.com/edward2mv/coingator-react-native"
            />
          </Col>
{/* MOVIES REACTION APP */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movies Reaction"
              description="This project is a front-end React application that I created just for fun. You can use it to discover the latest movies and get more information on them.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiReact />{" "}
                  React-dom
                </Badge>,
                <Badge>
                <SiReactrouter />{" "}
                  React-router
                </Badge>,
                <Badge>
                <SiReacttable />{" "}
                  React-query
                </Badge>,
                <Badge>
                  <AiFillApi/>{" "}
                  TMDB Rest API.
                </Badge>
                ]}
              link="https://github.com/edward2mv/movie-api-react"
            />
          </Col>
{/*PORTFOLIO */}

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Personal site & portfolio"
              description="My personal portfolio edme.dev which features some of my github projects as well as my resume and technical skills.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiReact />{" "}
                  React.js
                </Badge>,
                <Badge>
                <FaNodeJs />{" "}
                  Node.js
                </Badge>,
                <Badge>
                <SiExpress />{" "}
                  Express.js
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <MdOutlineHttp/>{" "}
                  Axios,
                </Badge>,
                <Badge >
                  <SiNetlify/>{" "}
                  Netlify.
                </Badge>
                ]}
              link="http://edme.dev/"
            />
          </Col>
{/* UDENFY */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udenfy}
              isBlog={false}
              title="Udenfy, Inc."
              description="Udenfy, Inc. is a marketing agency and training platform specializing in e-commerce.
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWordpress />{" "}
                  WordPress
                </Badge>,
                <Badge>
                <FaElementor />{" "}
                  Elementor
                </Badge>,
                <Badge>
                <SiNextdotjs />{" "}
                NextJs
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <SiReact/>{" "}
                  React.js
                </Badge>,
                <Badge >
                  <GrMysql/>{" "}
                  MySQL.
                </Badge>,
                <Badge >
                  <SiPhp/>{" "}
                  PHP.
                </Badge>
                ]}
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
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWordpress />{" "}
                  WordPress
                </Badge>,
                <Badge>
                <FaElementor />{" "}
                  Elementor
                </Badge>,
                <Badge>
                <FaVuejs />{" "}
                  Vue.js
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <GrMysql/>{" "}
                  MySQL.
                </Badge>,
                <Badge >
                  <SiPhp/>{" "}
                  PHP.
                </Badge>
                ]}
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
              This project was built using these technologies:"
              techStack={[
                <Badge >
                <SiWordpress />{" "}
                  WordPress
                </Badge>,
                <Badge>
                <FaElementor />{" "}
                  Elementor
                </Badge>,
                <Badge>
                  <SiCss3/>{" "}
                  CSS3
                </Badge>,
                <Badge >
                  <GrMysql/>{" "}
                  MySQL.
                </Badge>,
                <Badge >
                  <SiPhp/>{" "}
                  PHP.
                </Badge>
                ]}
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
              <br/>," This project was built using these technologies: ",]}
              techStack={[
                <Badge >
                <SiSolidity />{" "}
                  Solidity
                </Badge>,
                <Badge>
                <FaHardHat />{" "}
                  Hardhat
                </Badge>,
                <Badge>
                <SiWeb3Dotjs />{" "}
                  Web3.js
                </Badge>,
                <Badge>
                  <SiReact/>{" "}
                  web3-react
                </Badge>,
                <Badge >
                  <SiIpfs/>{" "}
                  IPFS,
                </Badge>,
                <Badge >
                  <SiNetlify/>{" "}
                  Netlify.
                </Badge>
                ]}
              link="#https://github.com/edward2mv/AvatarPunks"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
