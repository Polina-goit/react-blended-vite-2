import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

export const EditForm = ({ currentTodo, cancelEdit, editTodo }) => {
  const handelSubmit = evt => {
    const form = evt.target;
    evt.preventDefault();
    const value = form.text.value;
    const apdetTodo = { text: value, id: currentTodo.id };
    editTodo(apdetTodo);
    console.log(value);
    form.reset();
  };
  return (
    <form className={style.form} onSubmit={handelSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelEdit}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
    </form>
  );
};
