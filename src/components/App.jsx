import { useState, useEffect } from 'react';
import fetchHits  from '../utils/api';
import Seachbar from './Seachbar/Seachbar';
import ImageGallery from './ImageGallery/ImageGallary';
import SpinnerLoader from './Loader/Loader';
import css from '../components/App.module.css';

export default function App() {

const [ hits, setHits ] = useState([]);
const [ name, setName ] = useState('');
const [ page, setPage ] = useState(1);
const [ loading, setLoading ] = useState(false);

useEffect(() => {
  if (name) {
    fetchData();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])


  const handleSubmit = name => {
    setName(name);
    setHits([]);
    setPage(1);
  };


  const fetchData = () => {
    const options = {
      name,
      page
    };

    setLoading(true);

    fetchHits(options)
      .then((hits) => { 
        setHits((prevHits) => [...prevHits, ...hits]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
      .finally(() => setLoading(false));
  };

  const reset = () => {
    setHits([]);
    setName('');
  };

    return (
      <div className={css.App}>
        <Seachbar onSubmitHandler={handleSubmit} />

        {loading ? <SpinnerLoader/> :
       <ImageGallery
       name={name}
       hits={hits}
       page={page}
       onLoadMore={fetchData} 
       isLoad={loading}
       onRefresh={reset}
     />
    }
      </div>
    );
}