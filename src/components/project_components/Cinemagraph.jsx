import ProjectDetails from "./CinemagraphDetails";
import { Container, Row, Col } from "react-bootstrap";
import ProjectImage from "../../assets/projects/tmdb_devices.png";

function Cinemagraph() {
  return (
    <Container fluid className="MarchMadness pt-5 mt-5">
      <Row>
        <span className="pre-sub pb-4">PROJECTS</span>
        <h3 className="pb-2">March Madness</h3>
        <p>Transformed a clients approach to tracking their fantasy league.</p>
        <p className="sub pb-5">Activite Users: 18</p>
      </Row>
      <Row>
        <Col xs={12} lg={6} className="img-col d-block d-lg-none">
          <img src={ProjectImage} alt="" className="img-fluid" />
        </Col>
        <Col xs={12} lg={6} className="content">
          <ProjectDetails />
        </Col>
        <Col xs={12} lg={6} className="img-col d-none d-lg-block">
          <img src={ProjectImage} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
export default Cinemagraph;
