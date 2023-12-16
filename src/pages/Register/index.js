import React from 'react'
import './register.scss';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../assets/components';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
    </div>
    <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={20} />
        <Input label="Email" placeholder="Email" />
        <Gap height={20} />
        <Input label="Password" placeholder="Password" />
        <Gap height={35} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali ke Login"  onClick={() => navigate('/Login')} />

      
        </div>
    </div>
  )
}

export default Register