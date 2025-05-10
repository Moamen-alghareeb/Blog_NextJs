import React from 'react';
import CategoriesBar from '../_components/CategoriesBar';
import axios from 'axios';

export default async function layout({ children }) {
  const { data } = await axios.get('http://localhost:5000/categories');
  return (
    <div>
      <CategoriesBar categories={data} />
      {children}
    </div>
  );
}
