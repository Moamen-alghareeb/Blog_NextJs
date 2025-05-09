import React from 'react';

export default async function catchAll({ params }) {
  const { slug } = await params; //params returns object helds all the params of the slug
  console.log(slug);

  return <div>catchAll {slug.join('/')}</div>;
}
