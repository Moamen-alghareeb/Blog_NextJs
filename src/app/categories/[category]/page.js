'use client';
import React, { useState } from 'react';
import CategoryNotFound from '../not-found';

import { notFound, useParams } from 'next/navigation';

export default function Category() {
  const { category } = useParams();
  const [input, setInput] = useState(0);
  if (input > 10) {
    return notFound();
  }
  console.log(category);
  return (
    <div>
      <h1>Category</h1>
      <input
        className="input"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
}
