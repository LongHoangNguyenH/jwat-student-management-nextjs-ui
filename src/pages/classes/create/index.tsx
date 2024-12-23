import UnAuthorization from '@/pages/unauthorize';
import { useRouter } from 'next/router';
import React from 'react';

const ClassFormPage = () => {
  const router = useRouter();
  const { role } = router.query;
  return (
    <>
      {role === 'admin' || role === 'teacher' ? (
        <div className="flex h-[60vh] flex-col items-center justify-around text-black">
          <h1 className="text-4xl font-bold">Create Class</h1>
          <form className="flex flex-col items-center justify-center h-full">
            <div className="w-full max-w-md">
              <input
                type="text"
                id="className"
                name="className"
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring"
                placeholder="Class name"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <UnAuthorization />
        </div>
      )}
    </>
  );
};

export default ClassFormPage;
