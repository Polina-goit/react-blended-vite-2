import { Text } from '..';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({
  todoItem,
  index,
  deleteTodos,
  openEditForm,
}) => {
  const onDelete = () => {
    deleteTodos(todoItem.id);
  };

  const onEdit = () => {
    openEditForm(todoItem);
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{todoItem.text}</Text>
      <button className={style.deleteButton} type="button" onClick={onDelete}>
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button" onClick={onEdit}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
