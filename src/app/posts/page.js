import axios from 'axios';
import React from 'react';
import PostsComponent from '../_components/PostsComponent';

export default async function Posts() {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  console.log(data);

  return <PostsComponent posts={data} />;
}
