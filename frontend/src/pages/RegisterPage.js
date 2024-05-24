import React from 'react';
import axios from '../axios';
import UserForm from '../components/UserForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    await axios.post('http://localhost:5000/api/users', formData);
    navigate('/');
   // navigate('/');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Register User</h2>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegisterPage;
