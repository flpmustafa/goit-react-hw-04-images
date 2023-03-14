import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Seachbar/Seachbar.module.css';

const Seachbar = ({ onSubmitHandler }) => {
  const [name, setValue] = useState('')

  const handleChange = ev => { 
    setValue(ev.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      alert(
        'You have to enter something first to search for images!'
      );
      return;
    }
    onSubmitHandler(name);
    reset();
  };

  const reset = () => {
    setValue('');
  };

    return (
      <header className={css.Seachbar}>
        <form className={css.SeachForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SeachForm_button}>
            <span className={css.SeachForm_button_label}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
              >
                <title>search</title>
                <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
              </svg>
            </span>
          </button>

          <input
            className={css.SeachForm_input}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }

  Seachbar.propTypes = {
    handleSubmit: PropTypes.func,
  };

  export default Seachbar;