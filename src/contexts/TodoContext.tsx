import React, { createContext, useState } from "react";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  // Add other todo properties
}

interface TodoContextProps {
  todos: Todo[];
  addTodo: ({
    title,
    description,
    completed,
  }: {
    title: string;
    description: string;
    completed: boolean;
  }) => void;
  children?: React.ReactNode;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
});

export const TodoProvider: React.FC<TodoContextProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Test 1",
      description: "This is a test description",
      completed: false,
    },
    {
      id: 2,
      title: "Test 2",
      description: "This is a test description",
      completed: true,
    },
    {
      id: 3,
      title: "Test 2",
      description: "This is a test description",
      completed: false,
    },
    {
      id: 4,
      title: "Test 2",
      description: "This is a test description",
      completed: true,
    },
    {
      id: 5,
      title: "Test 2",
      description: "This is a test description",
      completed: false,
    },
  ]);

  const addTodo = ({
    title,
    description,
    completed,
  }: {
    title: string;
    description: string;
    completed: boolean;
  }) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      description,
      completed,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
