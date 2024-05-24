import React, { useEffect, useState } from 'react';
import axios from '../axios';
import UserList from '../components/UserList';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('http://localhost:5000/api/users');
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    setUsers(users.filter(user => user._id !== id));
  };

  const handleEdit = (user) => {
    navigate(`/edit/${user._id}`, { state: { user } });
  };

  return (
    <div>
      <button onClick={() => navigate('/register')} className="btn btn-primary mb-4">Add User</button>
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default DashboardPage;
