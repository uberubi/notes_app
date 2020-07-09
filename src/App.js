import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import WorkspaceContainer from "./components/NotesWorkSpace/WorkspaceContainer";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
      <Container>
        <Navbar />
        <Row>
          <Col xs={3} lg="3">
            <Sidebar />
          </Col>
          <Col>
            <WorkspaceContainer />
          </Col>
        </Row>
      </Container>
  );
};

export default App;

