import React from 'react'
import { mernlogo } from '../../..'
import './blogitem.scss'
import { Button, Gap } from '../../atoms'
import { useNavigate } from 'react-router-dom';

const BlogItem= () => {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
        <img className="image-thumb" src={mernlogo} alt="post" />
        <div className="content-detail">
         <p className="title" >Title  Blog</p>
         <p className="author">Autor - date post</p>
         <p className="body"> Kombinasi teknologi ini juga cocok untuk membangun platform blogging. Pengembang dapat menggunakan React untuk membuat tampilan blog yang menarik, sementara Express.js dan Node.js digunakan untuk mengelola permintaan HTTP dan menyediakan API untuk membuat, membaca, memperbarui, dan menghapus posting blog. MongoDB dapat digunakan untuk menyimpan konten posting blog dan informasi pengguna.</p>
         <Gap height={20} />
         <Button title='View Detail'  onClick={() => navigate('/detail-blog')} />
        </div>
      

    </div>
  )
}

export default BlogItem