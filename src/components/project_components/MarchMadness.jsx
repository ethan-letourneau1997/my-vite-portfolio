import React, { useRef, useEffect, useState } from "react";
import ProjectDetails from "./MarchMadnessDetails";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectImage from "../../assets/projects/march-madness-duo.png";

function MarchMadness() {
  return (
    <Container
      fluid
      id="march-madness"
      className="MarchMadness pt-5 mt-5 pb-5 mb-5"
    >
      <Row>
        <span className="pre-sub pb-4">PROJECT</span>
        <h3 className="pb-2">March Madness</h3>
        <p>Transformed a clients approach to tracking their fantasy league.</p>
        <p className="sub pb-5">Activite Users: 18</p>
      </Row>
      <Row>
        <Col xs={12} lg={6} className="img-col d-block d-lg-none">
          <img src={ProjectImage} alt="" className="img-fluid" />
        </Col>
        <Col xs={12} lg={6} className="content">
          <Row>
            <ProjectDetails />
          </Row>
        </Col>
        <Col xs={12} lg={6} className="img-col d-none d-lg-block">
          <img src={ProjectImage} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default MarchMadness;
