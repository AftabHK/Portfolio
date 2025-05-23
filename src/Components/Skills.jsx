import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      value: 90,
      description: "Strong grasp of semantic HTML5, forms, media elements, and accessibility standards."
    },
    {
      name: "CSS",
      value: 85,
      description: "Experienced with Flexbox, Grid, animations, and responsive design principles."
    },
    {
      name: "Bootstrap",
      value: 75,
      description: "Proficient in using Bootstrap 5 for building responsive layouts and components."
    },
    {
      name: "React",
      value: 65,
      description: "Skilled in creating components, handling props/state, and building dynamic UIs."
    },
    {
      name: "JavaScript",
      value: 50,
      description: "Understanding of ES6+, DOM manipulation, events, and basic algorithm implementation."
    },
    {
      name: "Git & GitHub",
      value: 50,
      description: "Able to track changes, manage branches, and collaborate on code repositories."
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-background-blur"></div>

      <Container className="position-relative content-overlay py-5 mt-5">
        <h2 className="text-center text-white mb-5">My Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} className="mb-5" key={index}>
              <div className="skill-label text-white">{skill.name}</div>
              <ProgressBar
                now={skill.value}
                label={`${skill.value}%`}
                className="custom-progress"
              />
              <p className="skill-description text-light mt-2">{skill.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
