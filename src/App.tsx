import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/Auth/LoginForm";
import Profile from "./components/Dashboard/Profile";
import TodoList from "./components/Dashboard/TodoList";
import { AuthProvider } from "./contexts/AuthContext";
import { TodoProvider } from "./contexts/TodoContext";
import { AuthContext } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard/dashboard";

const App: React.FC = () => {
  // const { user } = useContext(AuthContext);
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log(username);
    if (username) {
      setUser(username);
    } else {
      setUser(null);
    }
  }, [user]);
  return (
    <Router>
      <Fragment>
        <AuthProvider
          user={null}
          login={function ({
            username,
            password,
          }: {
            username: any;
            password: any;
          }): boolean {
            throw new Error("Function login not implemented.");
          }}
          logout={function (): void {
            throw new Error("Function logout not implemented.");
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <TodoProvider
                    todos={[]}
                    addTodo={function ({
                      title,
                      description,
                    }: {
                      title: string;
                      description: string;
                    }): void {
                      throw new Error("Function not implemented.");
                    }}
                  >
                    <Dashboard />
                  </TodoProvider>
                ) : (
                  <LoginForm />
                )
              }
            />
            {/* <Route path="/login" element={<LoginForm />} />
            <Route
              path="/dashboard"
              element={
                user ? (
                  <TodoProvider
                    todos={[]}
                    addTodo={function (title: string): void {
                      throw new Error("Function not implemented.");
                    }}
                  >
                    <Profile />
                    <TodoList />
                  </TodoProvider>
                ) : (
                  <Navigate
                    to={{
                      pathname: "/login",
                    }}
                    state={"/dashboard"}
                  />
                )
                // <PrivateRoute path="/dashboard">
                //   <TodoProvider
                //     todos={[]}
                //     addTodo={function (title: string): void {
                //       throw new Error("Function not implemented.");
                //     }}
                //   >
                //     <Profile />
                //     <TodoList />
                //   </TodoProvider>
                // </PrivateRoute>
              }
            /> */}
          </Routes>
        </AuthProvider>
      </Fragment>
    </Router>
  );
};

const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(location: any) =>
        user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
            }}
            state={location}
          />
        )
      }
    />
  );
};

export default App;
