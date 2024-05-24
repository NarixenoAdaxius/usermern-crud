import React from 'react';
import axios from '../axios';
import UserForm from '../components/UserForm';
import { useLocation, useNavigate } from 'react-router-dom';

const EditUserPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = state;

  const handleSubmit = async (formData) => {
    await axios.put(`http://localhost:5000/api/users/${user._id}`, formData);
    navigate('/');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      <UserForm initialData={user} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditUserPage;
