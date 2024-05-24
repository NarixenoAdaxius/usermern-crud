import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user._id} className="flex justify-between items-center border p-4 rounded-lg shadow">
            <div>
              {user.firstName} {user.lastName}, {user.age} ({new Date(user.birthday).toLocaleDateString()})
            </div>
            <div>
              <button onClick={() => onEdit(user)} className="btn btn-outline mr-2">Edit</button>
              <button onClick={() => onDelete(user._id)} className="btn btn-outline btn-error">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
