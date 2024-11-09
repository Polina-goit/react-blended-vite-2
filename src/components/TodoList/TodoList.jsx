import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem index={index} todoItem={todoItem} />
        </GridItem>
      ))}
    </Grid>
  );
};
