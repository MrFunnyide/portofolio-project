import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePages = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl">Web Developer Enthusiast</h1>
        <p className="my-4 font-medium">Aji Bayu Permadi</p>
        <NavLink
          to="/"
          className="font-semibold px-8 py-2 text-sm bg-slate-500 hover:bg-slate-100 hover:text-black hover:border hover:border-slate-500 text-white rounded-md">
          My CV
        </NavLink>
      </div>
    </div>
  );
};

export default HomePages;
