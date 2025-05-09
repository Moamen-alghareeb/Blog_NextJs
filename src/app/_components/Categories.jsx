import Link from 'next/link';
import React from 'react';

export default function Categories() {
  return (
    <div className="hidden md:flex items-center justify-around flex-wrap text-my-black bg-my-active rounded-4xl xl:rounded-full p-2 shadow-xl ">
      {/* Categories */}
      {/* <div className="flex-1 items-center justify-between flex-wrap"> */}
      <Link href="#" className="bg-my-hover rounded-3xl p-2">
        All Posts
      </Link>
      <Link href="#" className="hover:bg-my-hover rounded-3xl p-2 ml-1">
        Technology
      </Link>
      <Link href="#" className="hover:bg-my-hover rounded-3xl p-2 ml-1">
        Health
      </Link>
      <Link href="#" className="hover:bg-my-hover rounded-3xl p-2 ml-1">
        Travel
      </Link>
    </div>
  );
}
