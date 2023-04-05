import { Row, Col, Button } from "react-bootstrap";

import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";

function CinemagraphDetails() {
  const handleClickCode = () => {
    window.open(
      "https://github.com/ethan-letourneau1997/django_movies",
      "_blank"
    );
  };
  const handleClickSite = () => {
    window.open("https://cinegraph-lz3k3.ondigitalocean.app/", "_blank");
  };

  return (
    <Row className="MarchMadnessDetails pt-4">
      <Row className="features-row">
        <Col xs={12} sm={12} md={6} className="d-flex flex-column gap-3">
          <span>Search</span>
          <p>
            Find movies, tv, and people easily with a search functionality that
            includes autocomplete.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column gap-3">
          <span>API</span>
          <p>Retrievs and displays data from the TMDB API u</p>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column gap-3  pt-4">
          <span>Coming Soon</span>
          <p>
            Login and authentication using your TMDB account. The ability to
            rate, review, and save movies to your user profile.
          </p>
        </Col>
        <Col md={6} className="d-flex flex-column gap-3 pt-4">
          <span>Made With</span>
          <p>Django, REST API, Python, HTML, SASS, JavaScript, Bootstrap</p>
        </Col>
      </Row>
      <Row className="btn-row d-flex gap-4 pt-4">
        <Button
          size="lg"
          variant="outline-light d-flex gap-2"
          className="btn-demo"
          onClick={handleClickSite}
        >
          Site
          <RiComputerLine />
        </Button>
        <Button
          size="lg"
          variant="outline-light d-flex gap-2"
          className="btn-code"
          onClick={handleClickCode}
        >
          Code <AiFillGithub />
        </Button>
      </Row>
    </Row>
  );
}
export default CinemagraphDetails;
