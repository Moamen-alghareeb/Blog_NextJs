import PostsComponent from '@/app/_components/PostsComponent';
import axios from 'axios';
import React from 'react';

export default async function User({ params }) {
  const { slug } = await params;
  console.log(slug);
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${slug}`
  );
  console.log(data);

  return <PostsComponent posts={data} />;
}
