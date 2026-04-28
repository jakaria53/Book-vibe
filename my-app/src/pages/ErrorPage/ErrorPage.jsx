import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-indigo-500 to-purple-600 text-white px-4">
      
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>
      
      <p className="text-lg text-gray-200 mb-6 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default ErrorPage;