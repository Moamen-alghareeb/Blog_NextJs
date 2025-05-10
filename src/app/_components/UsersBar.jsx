import Link from 'next/link';
import React from 'react';

export default function UsersBar({ users }) {
  console.log(users);

  return (
    <div className="hidden md:flex items-center justify-around w-full text-my-black bg-my-active rounded-4xl xl:rounded-full p-2 shadow-xl">
      <div className="flex items-center justify-center flex-wrap text-my-black  w-[70%] ">
        {/* Categories */}
        {/* <div className="flex-1 items-center justify-between flex-wrap"> */}
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="hover:bg-my-hover rounded-3xl p-2 ml-1"
          >
            {user.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
