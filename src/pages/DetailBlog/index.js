import React from 'react';
import { logo1 } from '../../assets';
import { Link } from 'react-router-dom';  // Import Link
import './detailblog.scss';
import { Gap } from '../../assets/components';

const DetailBlog = () => {
  
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={logo1} alt="thumb" />
      <p className="blog-title">title-blog</p>
      <p className="blog-author">author - date post</p>
      <p className="blog-body">
        MERN Stack adalah kombinasi MongoDB, Express.js, React, dan Node.js yang digunakan untuk membangun aplikasi web modern. Kombinasi ini memiliki Keunggulan dalam kemudahan, kecepatan dan skalabilitas yang baik. Namun, perlu diingat bahwa terdapat beberapa kelemahan yang perlu dipertimbangkan sebelum memilih kombinasi ini untuk pengembangan proyek. Semoga ulasan kali ini menambah wawasan Anda tentang pengembangan web dan aplikasi!
      </p>
      <Gap height={20} />
      <Link to="/" className="back-link">Kembali ke home page</Link>
    </div>
  );
};

export default DetailBlog;
