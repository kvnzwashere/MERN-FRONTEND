import axios from 'axios';
import { useDispatch } from 'react-redux';

export const setDataBlog = (page) => {
  const dispatch = useDispatch();

  axios.get(`http://localhost:4000/v1/blog/post?page=${page}2&perPage=2`)
    .then(result => {
      const responseAPI = result.data;
      console.log('data API:', responseAPI.data);
      

      dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseAPI.data });
      dispatch({
        type: 'UPDATE_PAGE',
        payload: {
          currentPage: responseAPI.currentPage,
          totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)
        }
      });
    })
    .catch(err => {
      console.log('error:', err);
    });
};
