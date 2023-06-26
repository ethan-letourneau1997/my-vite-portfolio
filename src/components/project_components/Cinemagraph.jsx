import ProjectDetails from "./CinemagraphDetails";
import { Container, Row, Col } from "react-bootstrap";
import ProjectImage from "../../assets/projects/cinegraph.png";

function Cinegraph() {
  return (
    <Container fluid id="cinegraph" className="MarchMadness pt-5 mt-5 pb-5">
      <Row className="mt-5">
        <span className="pre-sub pb-4">PROJECT</span>
        <h3 className="pb-2">Cinegraph</h3>
        <p className="pb-5">
          A database of movies, television, and the people who make it all
          happen.
        </p>
      </Row>
      <Row>
        <Col xs={12} lg={6} className="img-col d-block d-lg-none">
          <img src={ProjectImage} alt="" className="img-fluid" />
        </Col>
        <Col xs={12} lg={6} className="img-col d-none d-lg-block">
          <img src={ProjectImage} alt="" className="img-fluid" />
        </Col>
        <Col xs={12} lg={6} className="content">
          <ProjectDetails />
        </Col>
      </Row>
    </Container>
  );
}
export default Cinegraph;
