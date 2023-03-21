import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container fluid className="Home">
      <Row className="title-row">
        <h1>
          i'm&nbsp;
          <span>
            ethan <span>letourneau</span>{" "}
          </span>
        </h1>
        <h1>and i make websites.</h1>
      </Row>
      <Row className="btn-row">
        <Button variant="outline-light">What can i do?</Button>
      </Row>
    </Container>
  );
}

export default Home;
