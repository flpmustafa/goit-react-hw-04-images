import PropTypes from 'prop-types';
import ModalImage from "react-modal-image";
import css from '../ImageGalaryItem/ImageGallaryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, alt }) => {
  return (
    <>
        <li className={css.ImageGallery}>
         <ModalImage small={webformatURL} large={largeImageURL} alt={alt} />
        </li>
    </>
  );
}


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGalleryItem;