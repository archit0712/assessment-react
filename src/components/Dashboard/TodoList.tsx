import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.css";

const TodoList: React.FC = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <div>
        <h2>Todo List</h2>
        {/* <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul> */}
      </div>
      <MDBListGroup style={{ minWidth: "2rem" }}>
        {todos.map((todo) => {
          return (
            <>
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold">{todo.title}</div>
                  <div className="text-muted">{todo.description}</div>
                </div>
                {todo.completed && (
                  <MDBBadge pill color="success">
                    Completed
                  </MDBBadge>
                )}
                {!todo.completed && (
                  <MDBBadge pill color="warning">
                    Not Completed
                  </MDBBadge>
                )}
              </MDBListGroupItem>
            </>
          );
        })}
      </MDBListGroup>
    </>
  );
};

export default TodoList;
