import PostComponent from '@/app/_components/PostComponent';
import axios from 'axios';
import React from 'react';

export default async function Post({ params }) {
  const { slug } = await params; //params returns object helds all the params of the slug
  console.log(slug);
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?id=${slug}`
  );
  console.log(data);

  return <PostComponent post={data} />;
}
