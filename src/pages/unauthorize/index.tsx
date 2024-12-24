import Link from 'next/link';
import React from 'react';

const UnAuthorization = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">Unauthorized</h1>
          <p className="mt-4 text-lg text-gray-700">You have no permission</p>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
          >
            Back to previous page
          </Link>
        </div>
      </div>
    </>
  );
};

export default UnAuthorization;
