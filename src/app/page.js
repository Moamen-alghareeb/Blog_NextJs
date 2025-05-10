// 'use client';
// import Posts from './posts/page';
// import Categories from './_components/CategoriesBar';
// import { useEffect, useState } from 'react';
import axios from 'axios';
import Introduction from './_components/Introduction';

export default async function Home() {
  return (
    <div>
      <Introduction />
    </div>
  );
}
