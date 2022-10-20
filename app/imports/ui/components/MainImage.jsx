import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const MainImage = () => (
  <Row className="justify-content-md-center pt-3" id="image">
    <Col md="auto">
      <Image fluid src="/images/griff" />
    </Col>
  </Row>
);

export default MainImage;
