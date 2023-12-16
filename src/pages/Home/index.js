import React from 'react';
import { BlogItem, Button, Gap } from '../../assets/components';
import './home.scss';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Buat Blog" onClick={() => navigate('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Sebelumnya" />
        <Gap width={20} />
        <Button title="Berikutnya" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
