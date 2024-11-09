import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, deleteTodos, openEditForm }) => {
  return (
    <Grid>
      {todos.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem
            index={index}
            todoItem={todoItem}
            deleteTodos={deleteTodos}
            openEditForm={openEditForm}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
