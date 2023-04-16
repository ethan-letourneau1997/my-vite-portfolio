import { Container, Row, Col } from "react-bootstrap";
import headshot from "../assets/misc/headshot.png";

function About() {
  return (
    <Container id="about" className="About py-5 ">
      <Row className="text-center mt-md-5 pt-5 ">
        <Col>
          <span className="pre-sub ">ABOUT</span>
          <h3 className="pb-2 mb-4 mt-4">ETHAN LETOURNEAU</h3>
        </Col>
      </Row>
      <Row className="pb-5 mb-5">
        <Col></Col>
        <Col xs={12} md={6} lg={5}>
          <p className="">
            As a recent graduate with a Bachelor's degree in Business
            Administration and a Master's degree in Information Technology, I am
            passionate about coding and creating websites and applications that
            are clean, efficient, and user-friendly.
          </p>
          <p>
            My experience includes working with various technologies, such as
            Python, HTML, CSS, JavaScript, React, REST API, and database design
            and implementation. I believe in making good design and development
            accessible to everyone, and I strive to make my work intuitive and
            user-friendly.
          </p>
          <p>
            During my free time, I enjoy experimenting with new technologies and
            working on personal projects. As a developer, I am always seeking
            new challenges and opportunities to learn and grow.
          </p>
        </Col>
        <Col
          xs={12}
          md={5}
          lg={4}
          xl={4}
          className="col-md-none mx-auto px-5 px-mds-0 px-xl-5"
        >
          <img src={headshot} alt="" className="img-fluid px-3" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default About;
