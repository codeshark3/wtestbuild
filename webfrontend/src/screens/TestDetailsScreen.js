import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import "../assets/css/index.css";
const TestDetailsScreen = ({ match }) => {
  //   const test = tests.find((p) => p._id == match.params._id);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const fetchTest = async () => {
      const { data } = await axios.get(`/api/tests/${match.params.id}`);
      setTest(data);
    };

    fetchTest();
  }, []);
  return (
    <div>
      <div className="card border-dark mb-3">
        <div className="card-header">
          {test.name}:{test.id}
        </div>
        <div className="card-body">
          <Row>
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Personal Information
            </h3>
          </Row>
          <div className="details-text">
            <Row>
              <Col className="table-text">NAME</Col>
              <Col className="table-text"> {test.name}</Col>
            </Row>
            <Row>
              <Col className="table-text">AGE</Col>
              <Col className="table-text"> {test.age}</Col>
            </Row>
            <Row>
              <Col className="table-text" className="table-text">
                GENDER
              </Col>
              <Col className="table-text"> {test.sex}</Col>
            </Row>
            <Row>
              <Col className="table-text">LOCATION</Col>
              <Col className="table-text"> {test.location}</Col>
            </Row>
          </div>
          <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
            Tests
          </h3>
          <div>
            <Row>
              <Col className="table-text">ONCHOCERCIASIS</Col>
              <Col className="table-text"> {test.oncho}</Col>
            </Row>
            <Row>
              <Col className="table-text">SCHISTOSOMIASIS</Col>
              <Col className="table-text"> {test.schisto}</Col>
            </Row>
            <Row>
              <Col className="table-text">LYMPHATIC FILARIASIS</Col>
              <Col className="table-text">{test.lf}</Col>
            </Row>
            <Row>
              <Col className="table-text">SOIL TRANSMITTED HELMINTHS</Col>
              <Col className="table-text">{test.helminths}</Col>
            </Row>
          </div>
        </div>
      </div>
      <Link
        to="/tests"
        className="btn btn-block bg-primary  "
        style={{
          color: " var(--txt-white) ",
        }}
      >
        Back
      </Link>
    </div>
  );
};

export default TestDetailsScreen;
