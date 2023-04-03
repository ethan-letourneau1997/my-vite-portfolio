import { Container } from "react-bootstrap";
import MarchMadness from "./project_components/MarchMadness";
import Cinemagraph from "./project_components/Cinemagraph";

function Projects() {
  return (
    <Container fluid className="Projects">
      <MarchMadness />
      <Cinemagraph />
    </Container>
  );
}

export default Projects;
