import PropTypes from 'prop-types';
import css from '../Button/loadMoreBtn.module.css';

const LoadMoreBtn = ({ onButtonClick }) => {
  return (
    <>
      <button className={css.Button} type="button" onClick={onButtonClick}>
        Load more
      </button>
    </>
  );
}


LoadMoreBtn.propTypes = {
  onButtonClick: PropTypes.func,
};

export default LoadMoreBtn;