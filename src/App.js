import React from 'react';
import { Row, Col } from 'antd';
import './App.css'
const App = ()  => {
  return (
    <>

    <Row>
      <Col span={24} className="search-field" >
        Search Field
        </Col>
    </Row>

    <Row>
      <Col flex="250px" className="sidebar">Sidebar</Col>
      <Col flex="auto" className="workplace" >Workplace</Col>
    </Row>

    </>
  );
}

export default App;
