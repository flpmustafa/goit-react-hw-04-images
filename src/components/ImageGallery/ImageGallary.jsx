import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalaryItem/ImageGallaryItem';
import ClearBtn from '../Button/ClearButton';
import LoadMoreBtn from '../Button/LoadMoreBtn';
import { per_page } from 'utils/api'
import cssBtn from '../Button/loadMoreBtn.module.css';
import css from '../ImageGallery/ImageGallary.module.css';

//const numb = 12;

const ImageGallery = ({ hits, isLoad, onRefresh, onLoadMore}) => {
 
  return (
    <>
      <ul className={css.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            dataImg={hits}
            alt={tags}
          />
        ))}
      </ul>
      <div className={cssBtn.Button_container}>
      {hits.length >= per_page && (<LoadMoreBtn onButtonClick={onLoadMore} />)} 
      {hits.length > 0 &&  <ClearBtn onClick={onRefresh}/>}
      </div> 
    </>
  );
}

ImageGallery.propTypes = {
  hits: PropTypes.array,
  fetchData: PropTypes.func,
  onLoadMore: PropTypes.func,
};

export default ImageGallery;