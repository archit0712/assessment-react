import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import Profile from "./Profile";
import TodoList from "./TodoList";
import { MDBBtn } from "mdb-react-ui-kit";
import { AuthContext } from "../../contexts/AuthContext";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Dashboard: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <MDBBtn
        className="adjustment-logout mb-4 mt-4"
        style={{ marginLeft: "90rem" }}
        onClick={logout}
      >
        Logout
      </MDBBtn>
      <div style={{ display: "grid", width: 100, padding: 100 }}>
        <Row>
          <Col style={{ width: 1500 }}>
            <Profile />
          </Col>
          <Col>
            <TodoList />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
