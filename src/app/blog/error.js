'use client';
import React from 'react';

export default function Error({ error }) {
  console.log(error);

  return <div>{error.message}</div>;
}
