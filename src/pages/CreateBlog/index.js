import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Upload, Textarea, Button, Gap } from '../../assets/components';
import './createblog.scss';

const CreateBlog = () => {
 

  return (
    <div className="blog-post">
      <div className="navigation">
        <Link to="/" className="back-link">
          Kembali
        </Link>
        <p className="title">Create New Blog</p>
      </div>
      <Input label="Post Title" />
      <Upload />
      <Textarea />
      <Button title="Save Blog" />
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
