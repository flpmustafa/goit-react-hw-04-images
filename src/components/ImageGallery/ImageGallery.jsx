import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ClearBtn from '../Button/ClearButton';
import LoadMoreBtn from '../Button/LoadMoreBtn';
import cssBtn from '../Button/LoadMoreBtn.module.css';
import css from '../ImageGallery/ImageGallary.module.css';

const numb = 12;

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
      {hits.length >= numb && (<LoadMoreBtn onButtonClick={onLoadMore} />)} 
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