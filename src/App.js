import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import WorkspaceContainer from "./components/NotesWorkSpace/WorkspaceContainer";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";

const App = () => {
  return (
    <AppWrapper>
      <Container className="container">
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
    </AppWrapper>
  );
};

export default App;

const Container = styled.div``;
const AppWrapper = styled.div`
  background-color: var(--backgroundColor);
  background-size: cover;
`;
