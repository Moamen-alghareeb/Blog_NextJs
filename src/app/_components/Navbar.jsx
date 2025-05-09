'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const ToggleBurger = () => {
    setOpen((prev) => !prev);
  };
  const CloseBurger = () => {
    setOpen(false);
  };
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between my-2">
      {/* LOGO */}
      <div className="flex flex-2  items-center gap-4 text-2xl font-bold">
        <Link href="/">
          <img
            src="/logo.jpeg"
            alt="life Logo"
            className="w-15 h-15 md:{w-20 h-20} rounded-4xl"
          />
        </Link>
        <span className="cursor-default">Life in Pages</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div className="cursor-pointer text-4xl" onClick={ToggleBurger}>
          {/* Change Hamburger Icon */}
          {open ? 'X' : '☰'}
        </div>
        {/* MOBILE a LIST */}
        <div
          className={`w-full h-screen bg-my-light-green  flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-20 transition-all ease-in-out ${
            open ? 'left-0' : 'left-full'
          }`}
        >
          <Link href="#" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/postlist" onClick={CloseBurger}>
            Posts
          </Link>
          <Link href="#" onClick={CloseBurger}>
            Most Popular
          </Link>
          <Link href="#" onClick={CloseBurger}>
            About
          </Link>
          <Link
            href="#"
            className="btn btn-soft btn-info"
            onClick={CloseBurger}
          >
            Login 👋
          </Link>
        </div>
      </div>
      {/* DeskTop MENU */}

      <div className="hidden md:flex flex-2/12 items-center justify-center gap-8 xl:gap-12 font-medium">
        <Link href="/">Home</Link>
        <Link href="postlist">Posts</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
