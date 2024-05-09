import axios from 'axios';

const API_KEY = '7d-g00Y2qkk3ddPSO_rmU2mT96fXmbnYuy-2_CozLE4';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

export const getPhotos = async <T>(
  query: string,
  page = 1,
  per_page = 15
): Promise<T> => {
  const { data } = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page,
    },
  });

  return data;
};
