import axios from 'axios';
import CategoryNotFound from '../not-found';
import Link from 'next/link';
import PostsComponent from '../../_components/PostsComponent';

export default async function Category({ params }) {
  const { slug } = await params;
  console.log(slug);

  console.log(`http://localhost:5000/posts?categoryId=${slug}`);

  const { data } = await axios.get(
    `http://localhost:5000/posts?categoryId=${slug}`
  );
  // console.log(data);

  http: return <PostsComponent posts={data} />;
}
