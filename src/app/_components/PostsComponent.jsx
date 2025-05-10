import Link from 'next/link';
import React from 'react';

export default function PostsComponent({ posts }) {
  return (
    <div className=" flex flex-col gap-8 ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="card bg-my-light-green size-full outline-2 outline-my-hover mt-3"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <figure className="hidden md:block size-4/12 md:size-2/4 ">
              <img
                src="/featured1.jpeg"
                alt="post Image"
                className="rounded-xl"
              />
            </figure>
            <p>{post.body}</p>
            <p>by ghareeb</p>
            <div className="card-actions justify-end">
              <div className="btn btn-neutral p-5.5 flex items-center justify-center">
                <Link href={`/posts/${post.id}`}>Details</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
