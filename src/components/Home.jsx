import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container fluid className="Home">
      <Row className="title-row">
        <h1>
          <span className="one">i'm&nbsp;</span>
          <span className="blue">
            <span className="two">ethan </span>
            <span className="three">letourneau</span>{" "}
          </span>
        </h1>
        <h1>
          <span className="five">and&nbsp;</span>{" "}
          <span className="six">i&nbsp;</span>
          <span className="seven">make&nbsp;</span>{" "}
          <span className="eight">websites.&nbsp;</span>
        </h1>
      </Row>
      <Row className="btn-row">
        <Button href="#skills" variant="outline-light">
          What can i do?
        </Button>
      </Row>
    </Container>
  );
}

export default Home;
