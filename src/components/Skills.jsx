import { Container, Row, Col, Card } from "react-bootstrap";
import checkBox from "../assets/misc/checkbox.png";

function Skills() {
  return (
    <Container id="skills" className="Skills pt-5 mt-5">
      <Row>
        <Col className="card-col" xs={12} md={6} lg={4}>
          <Card className="web-card p-2 pb-2 slide-up fast">
            <Card.Body>
              <Card.Title className="pb-3">Web</Card.Title>
              <Card.Subtitle>
                Design Modern Responsive web applications
              </Card.Subtitle>
              <hr />
              <div>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Typescript, HTML, CSS
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  React
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Next.js, Django, Node
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Rest API
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Responsive Design
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="card-col" xs={12} sm={12} md={6} lg={4}>
          {/* REST API */}
          <Card className="code-card p-2 pb-2 slide-up medium">
            <Card.Body>
              <Card.Title className="pb-3">Code</Card.Title>
              <Card.Subtitle>
                Knowledge in a variety of language and technologies
              </Card.Subtitle>
              <hr />
              <div>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Python
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Java
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />C
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Git
                </span>
                <span>
                  <img src={checkBox} height="30" alt="" />
                  Docker
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="card-col" xs={12} sm={12} md={12} lg={4}>
          <Card
            className="data-card p-2 pb-2 slide-up slow"
            style={{ width: "20rem" }}
          >
            <Card.Body>
              <Card.Title className="pb-3">Data</Card.Title>
              <Card.Subtitle>
                Experience working with large amounts of data
              </Card.Subtitle>
              <hr />
              <div>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Database Design
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Database Integration
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  SQL
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Data Analytics
                </span>
                <span>
                  <img src={checkBox} alt="checkbox" />
                  Tableau
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
