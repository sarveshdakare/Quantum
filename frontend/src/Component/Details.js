import React from 'react';

const UserTable = () => {
  const users = [
    { name: 'John', dateCreated: '2022-05-15', role: 'Admin', status: 'Active' },
    { name: 'Mary', dateCreated: '2021-09-28', role: 'User', status: 'Inactive' },
    { name: 'Alice', dateCreated: '2023-01-10', role: 'Manager', status: 'Active' },
    { name: 'Bob', dateCreated: '2022-11-03', role: 'Viewer', status: 'Active' },
    { name: 'Charlie', dateCreated: '2020-07-22', role: 'Admin', status: 'Inactive' },
  ];

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={tableHeader}>Name</th>
          <th style={tableHeader}>Date Created</th>
          <th style={tableHeader}>Role</th>
          <th style={tableHeader}>Status</th>
          <th style={tableHeader}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} style={index % 2 === 0 ? evenRow : oddRow}>
            <td style={tableData}>{user.name}</td>
            <td style={tableData}>{user.dateCreated}</td>
            <td style={tableData}>{user.role}</td>
            <td style={tableData}>{user.status}</td>
            <td style={tableData}>
              <button style={buttonStyle} onClick={() => handleEdit(user)}>Edit</button>
              <button style={buttonStyle} onClick={() => handleDelete(user)}>Delete</button>
              {/* Add more actions as needed */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableHeader = {
  borderBottom: '2px solid #ddd',
  padding: '12px',
  textAlign: 'left',
};

const evenRow = {
  backgroundColor: '#f2f2f2',
};

const oddRow = {
  backgroundColor: '#fff',
};

const tableData = {
  border: '1px solid #ddd',
  padding: '8px',
};

const buttonStyle = {
  marginRight: '4px',
  padding: '6px 10px',
  cursor: 'pointer',
};

const handleEdit = (user) => {
  // Implement the edit functionality
  console.log(`Editing user: ${user.name}`);
};

const handleDelete = (user) => {
  // Implement the delete functionality
  console.log(`Deleting user: ${user.name}`);
};

export default UserTable;
