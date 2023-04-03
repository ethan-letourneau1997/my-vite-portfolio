import { Row, Col, Button } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";

function CinemagraphDetails() {
  return (
    <Row className="MarchMadnessDetails pt-4">
      <Row className="features-row">
        <Col xs={12} sm={12} md={6} className="d-flex flex-column gap-3">
          <span>Draft</span>
          <p>
            Handles the draft logic while users select out of the entire pool of
            march madness players.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column gap-3">
          <span>Standings</span>
          <p>
            Users can see their up-to-date standings within their group and
            against all other users.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column gap-3  pt-4">
          <span>Scalability</span>
          <p>
            Groups of up to ten users draft out of their own pool of players.
            This creates an endless player pool.
          </p>
        </Col>
        <Col md={6} className="d-flex flex-column gap-3 pt-4">
          <span>Made With*</span>
          <p>Django, Postgres, Python, AWS, Bootstrap, HTML, CSS</p>
        </Col>
      </Row>
      <Row className="btn-row d-flex gap-4 pt-4">
        <Button
          size="lg"
          variant="outline-light d-flex gap-2"
          className="btn-demo"
        >
          Demo
          <RiComputerLine />
        </Button>
        <Button
          size="lg"
          variant="outline-light d-flex gap-2"
          className="btn-code"
        >
          Code <AiFillGithub />
        </Button>
      </Row>
    </Row>
  );
}
export default CinemagraphDetails;
