import { EditForm, Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savTodos = localStorage.getItem('todos');
    return !savTodos ? [] : JSON.parse(savTodos);
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const openEditForm = todoItem => {
    setCurrentTodo(todoItem);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo(null);
  };

  const editTodo = updatedTodo => {
    setTodos(prev => {
      const index = prev.findIndex(todo => todo.id === currentTodo.id);
      return prev.toSpliced(index, 1, updatedTodo);
    });
    cancelEdit();
  };

  const addTodo = todoText => {
    const newTodo = {
      id: nanoid(),
      text: todoText,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodos = id => {
    // setTodos(prev => prev.filter(todo => todo.id !== id));
    setTodos(prev => {
      const index = prev.findIndex(todo => todo.id === id);
      return prev.toSpliced(index, 1);
    });
  };
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          cancelEdit={cancelEdit}
          editTodo={editTodo}
        />
      ) : (
        <Form addTodo={addTodo} />
      )}
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          deleteTodos={deleteTodos}
          openEditForm={openEditForm}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
