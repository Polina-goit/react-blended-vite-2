import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todoText => {
    const newTodo = {
      id: nanoid(),
      text: todoText,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <Form addTodo={addTodo} />
      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
