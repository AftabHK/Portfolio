import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./Contact.css"; 
import resumeFile from "../assets/resume/RESUME_AFTAB_HUSAIN.pdf"; 

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! Thank you.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ backgroundColor: "#f7f7f7", paddingTop: "80px" }}>
      <Container className="py-5">
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="align-items-start justify-content-center">
          
          <Col md={5} className="mb-4">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h5>Contact Info</h5>
              <p><strong>Email:</strong> karbariaftab03@gmail.com</p>
              <p><strong>Phone:</strong> +91 9164975072</p>
              <p><strong>Location:</strong> Hyderabad, India</p>

              <a
                href={resumeFile}
                download="AftabHusain_Resume.pdf"
                className="btn btn-dark mt-4"
              >
                Download Resume
              </a>
            </div>
          </Col>


          <Col md={7}>
            <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Write your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button  type="submit" className="w-100 btn rounded-pill btn-dark">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Footer Section */}
        <Row className="mt-5 text-center">
          <Col>
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} Aftab Husain. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
