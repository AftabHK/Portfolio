import { Container, Row, Col, Image } from "react-bootstrap";
import "./AboutMe.css";
import profileImage from "../assets/images/aboutme/lp-bg.jpg"; 

function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="about-background-blur"></div>

      <Container fluid className="px-5 position-relative content-overlay">
        <Row className="align-items-center justify-content-center min-vh-100">
          <div
            className="d-flex flex-column justify-content-center text-center"
            style={{ marginTop: "60px" }}
          >
            <h1 className="text-white">About Me</h1>
            <p
              className="d-flex flex-column mt-5"
              style={{ fontSize: "1.3rem", color: "#fff" }}
            >
              Hi, I'm <strong>Aftab Husain</strong>, a dedicated web developer with a strong interest in <br />
              creating modern user-centric web applications. With a focus on writing clean, scalable code <br />
              and delivering seamless user experiences, I thrive on solving real-world problems through web technologies.
            </p>
          </div>

          <Col
            md={6}
            className="d-flex flex-column justify-content-center text-center text-md-start"
            style={{ paddingLeft: "40px", color: "white" }}
            data-aos="fade-right"
          >
            <div className="fs-5">
              <ul>
                <li>
                  Passionate web developer focused on responsive, user-friendly applications
                </li>
                <li className="mt-3">
                  Skilled in HTML, CSS, JavaScript, and modern frameworks
                </li>
                <li className="mt-3">
                  Committed to writing clean, maintainable, efficient code
                </li>
                <li className="mt-3">
                  Experienced in performance-optimized web interfaces
                </li>
                <li className="mt-3">
                  Focused on accessibility and usability
                </li>
              </ul>
            </div>
          </Col>

          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
            data-aos="fade-left"
          >
            <Image
              src={profileImage}
              alt="About"
              fluid
              rounded
              style={{
                maxWidth: "500px",
                border: "3px solid #fff",
                maxHeight: "600px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
