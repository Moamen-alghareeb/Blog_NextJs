import React from 'react';
import UsersBar from '../_components/UsersBar';
import axios from 'axios';

export default async function layout({ children }) {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return (
    <div>
      <UsersBar users={data} />
      {children}
    </div>
  );
}
