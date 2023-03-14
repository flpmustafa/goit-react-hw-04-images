import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '33037708-78be3fad6ecee7435e5675b43';
export const per_page = 12;
const API_PARAMS = new URLSearchParams({
                 image_type: 'photo',
                 orientation: 'horizontal',
                 safesearch: true,
                 per_page: per_page },
  );

  const fetchHits = ({ name = '', page = 1 }) => {
    const url = `${API_URL}?key=${API_KEY}&q=${name}&page=${page}&${API_PARAMS}`;
    return axios
      .get(url)
      .then(({ data }) => data.hits);
  };

  export default fetchHits;
  