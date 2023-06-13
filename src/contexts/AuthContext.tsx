import React, { createContext, useState } from "react";
import { PropsWithChildren } from "react";
import data from "../user.json";
interface User {
  username: string | null;
  email: string;
  password: string;
  name: string;
  // Add other profile information
}

interface AuthContextProps {
  user: User | null;
  login: ({ username, password }: { username: any; password: any }) => boolean;
  logout: () => void;
  children?: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => false,
  logout: () => {},
});

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = ({ username, password }: { username: any; password: any }) => {
    console.log(data);
    let value: boolean = false;
    if (username && password) {
      data.find((elem, index) => {
        if (elem.username === username) {
          if (elem.password === password) {
            setUser(username);
            console.log(data[index]);
            localStorage.setItem("username", username);
            localStorage.setItem("email", data[index].email);
            localStorage.setItem("name", data[index].name);
            value = true;
          }
        } else {
          value = false;
          //   alert("Invalid Username Password");
        }
      });
    }
    return value;
    // Authenticate user using JWT or other mechanism
    // Set user profile information
  };

  const logout = () => {
    // Clear authentication information
    setUser(null);
    localStorage.clear();
    window?.location?.reload();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
