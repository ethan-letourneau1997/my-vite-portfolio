import { Container } from "react-bootstrap";
import MarchMadness from "./project_components/MarchMadness";
import Cinemagraph from "./project_components/Cinemagraph";

function Projects() {
  return (
    <Container fluid className="Projects">
      <Cinemagraph id="cinegraph" />
      <MarchMadness />
    </Container>
  );
}

export default Projects;
