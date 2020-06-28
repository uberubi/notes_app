import React from "react";
import { Row, Col } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import "./App.css";
import { NotesProvider } from "./context";

const App = (props) => {
  return (
    <>
      <NotesProvider>
        <Row flex='auto'>
          <Col flex="250px" className="sidebar">
            <Sidebar />
          </Col>

          <Col flex="auto" className="workspace">
            <Workspace />
          </Col>
        </Row>
      </NotesProvider>
    </>
  );
};

export default App;
