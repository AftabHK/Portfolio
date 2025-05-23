// src/Components/Projects.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

import smartIdpImg from "../assets/images/projects/smart-idp.jpg";
import zahratImg from "../assets/images/projects/zahrat.webp";
import kicareerImg from "../assets/images/projects/kicareer.jpg";
import portfolioImg from "../assets/images/projects/portfolio.jpg";

function Projects() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectList = [
    {
      title: "Smart-IDP",
      image: smartIdpImg,
      links: [
        { label: "GitHub", url: "https://github.com/your-smartidp-link" },
        { label: "Live Demo", url: "https://smartidp.example.com" },
      ],
    },
    {
      title: "Zahrat Buraydah",
      image: zahratImg,
      links: [
        { label: "GitHub", url: "https://github.com/zahrat-link" },
        { label: "Website", url: "https://zahratburaydah.com" },
      ],
    },
    {
      title: "KI-Career",
      image: kicareerImg,
      links: [
        { label: "GitHub", url: "https://github.com/kicareer" },
        { label: "Live Site", url: "https://kicareer.com" },
      ],
    },
    {
      title: "Portfolio Website",
      image: portfolioImg,
      links: [
        { label: "GitHub", url: "https://github.com/your-portfolio" },
        { label: "Live", url: "https://yourportfolio.com" },
      ],
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <section id="projects" className="projects-section">
      <Container className="py-5">
        <h2 className="text-center mb-5" data-aos="fade-down">Projects</h2>
        <Row className="g-4">
          {projectList.map((project, index) => (
            <Col md={6} lg={6} key={index} data-aos="zoom-in" style={{ display: "flex" }}>
              <Card
                className="project-card w-100"
                style={{ backgroundImage: `url(${project.image})` }}
                onClick={() => handleCardClick(index)}
              >
                <div className="project-title">
                  <Card.Title>{project.title}</Card.Title>
                </div>

                <div className={`card-overlay ${activeCard === index ? "active" : ""}`}>
                  <Card.Body>
                    <div className="project-links">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
