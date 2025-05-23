import React, { useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeSection.css";
import profileImage from "../assets/images/profile1.jpg";

const HomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="home-section">

      <div className="background-blur-overlay"></div>

      <Container fluid className="px-5 position-relative" style={{ zIndex: 1 }}>
        <Row className="align-items-center justify-content-center min-vh-100">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center text-center text-md-start"
            style={{ paddingLeft: "40px" }}
            data-aos="fade-right"
          >
            <div>
              <h1 className="display-4 fw-bold text-white">Aftab Husain</h1>
              <p className="lead text-white">
                I am a passionate web developer focused on creating modern, responsive web applications.
              </p>
              <p className="lead text-white">
                I specialize in building cutting-edge, user-friendly interfaces that prioritize performance and accessibility.
              </p>
              <p className="lead text-white">
                From design to deployment, I enjoy transforming ideas into interactive digital experiences.
              </p>
            </div>
          </Col>

          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
            data-aos="fade-left"
          >
            <Image
              src={profileImage}
              alt="Profile"
              fluid
              style={{
                maxWidth: "400px",
                borderRadius:"30px",
                border: "4px solid #fff",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
