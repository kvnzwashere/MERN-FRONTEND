import React, { useEffect, useState } from 'react';
import { BlogItem, Button, Gap } from '../../assets/components';
import './home.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('page: ', page)

  useEffect(() => {
    dispatch(setDataBlog(1));
  }, [dispatch]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log(counter);
  };

  const next = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate('/create-blog')} />
      </div>

      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog &&
          dataBlog.map(blog => (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          ))}
      </div>

      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">{page.currentPage} / {page.totalPage} </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
