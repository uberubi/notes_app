import React from "react";
import { Row, Col } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspace from "./components/Workspace/Workspace";
import SearchField from "./components/SearchField/SearchField";
import "./App.css";
import { NotesProvider } from "./context";

const App = (props) => {
  return (
    <>
      <NotesProvider>
        <Row>
          <Col span={24} className="search-field">
            <SearchField />
          </Col>
        </Row>

        <Row>
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
