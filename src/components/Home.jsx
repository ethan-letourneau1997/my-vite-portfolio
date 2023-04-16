import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container fluid className="Home">
      <Row className="title-row">
        <h1>
          <span className="im">i'm&nbsp;</span>
          <span className="blue">
            <span className="ethan">ethan &nbsp;</span>
            <span className="letourneau">letourneau</span>{" "}
          </span>
        </h1>
        <h1>
          <span className="and">and&nbsp;</span>{" "}
          <span className="i">i&nbsp;</span>
          <span className="make">make&nbsp;</span>{" "}
          <span className="websites">websites.&nbsp;</span>
          {/* <span className="period">.</span> */}
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
