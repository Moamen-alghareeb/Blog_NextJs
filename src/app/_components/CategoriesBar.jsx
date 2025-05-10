// 'use client';
import Link from 'next/link';
import React from 'react';

export default function CategoriesBar({ categories }) {
  console.log(categories);

  return (
    <div className="hidden md:flex items-center justify-around flex-wrap text-my-black bg-my-active rounded-4xl xl:rounded-full p-2 shadow-xl ">
      {/* Categories */}
      {/* <div className="flex-1 items-center justify-between flex-wrap"> */}
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/categories/${cat.id}`}
          className="hover:bg-my-hover rounded-3xl p-2 ml-1"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
