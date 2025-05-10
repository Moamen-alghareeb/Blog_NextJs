import axios from 'axios';
import Link from 'next/link';
import React from 'react';

export default async function PostComponent({ post }) {
  console.log(post);
  const [mypost] = post;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${mypost.id}`
  );
  console.log(data);
  const comments = data;

  return (
    <>
      <div className=" flex flex-col gap-8 mx-2">
        <div className="card bg-my-light-green size-full outline-2 outline-my-hover mt-3">
          <div className="card-body">
            <h2 className="card-title">{mypost.title}</h2>
            <figure className="hidden md:block size-4/12 md:size-2/4 ">
              <img
                src="/featured1.jpeg"
                alt="post Image"
                className="rounded-xl"
              />
            </figure>
            <p>{mypost.body}</p>
            <p>by ghareeb</p>
          </div>
        </div>
      </div>
      {comments.map((comment) => (
        <div className=" flex flex-col gap-8 m-5 ">
          <div className="card bg-my-red size-full outline-2 outline-my-hover mt-3">
            <div className="card-body">
              <h2 className="card-title">
                <span className="font-bold text-lime-500">Name:</span>{' '}
                {comment.name}
              </h2>
              <p>
                <span className="font-bold text-lime-500">Comment:</span>{' '}
                {comment.body}
              </p>
              <h4>
                <span className="font-bold text-lime-500">Email:</span>{' '}
                {comment.email}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
