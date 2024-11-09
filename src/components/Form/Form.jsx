import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
export const Form = ({ addTodo }) => {
  const onSubmit = evt => {
    const form = evt.target;
    evt.preventDefault();
    const value = form.search.value;
    addTodo(value);
    console.log(value);
    form.reset();
  };
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
