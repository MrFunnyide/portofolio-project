import React from "react";
import { FaBan } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex gap-5 justify-center items-center">
      <FaBan className="text-4xl md:text-6xl " />
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-500 text-transparent bg-clip-text">
        Not Found Page
      </h1>
    </div>
  );
};

export default ErrorPage;
