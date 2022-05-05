import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Eudys-Medina.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://myporfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full-Stack Developer [Undefy, Inc.]"
              date="September 2020 - june 2022"
              content={[
                "Worked on the development of E‑commerce and LMS website ( Udenfy.com) and created features to enhance the user experience for smartphones.",
                "Redesigned Wigme.com and created features to enhance the user experience and optimized designs for smartphones.",
                " Translated designs and wireframes into a highly responsive user interface and reusable components using React.js.",
                "Used Wordpress RESTFUL API with React to display data using the Custom Components, library Components, and Frontity.",
                "developed Custom plugins for WordPress in Php and used 3rd party plugins for the agile deployment of site.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Hotel Nicolas de Ovando-2019]"
              content={[
                "Worked on building front-end UI design using HTML5, CSS3, JavaScript jQuery, and building API routes using Node and express.js.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Software Engineer [UNAPEC, Santo Domingo] "
              date="2014 - Present"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />

            <h3 className="resume-title">Publications</h3>
            <Resumecontent
              title=""
              content={[
                "",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
