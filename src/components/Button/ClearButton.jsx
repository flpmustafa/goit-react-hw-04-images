import PropTypes from 'prop-types';
import css from '../Button/LoadMoreBtn.module.css';

const ClearBtn = ({ onClick }) => {
  return (
    <>
      <button className={css.Button} type="button" onClick={onClick}>
       Сlear page
      </button>
    </>
  );
}



ClearBtn.propTypes = {
  onClick: PropTypes.func,
};

export default ClearBtn;