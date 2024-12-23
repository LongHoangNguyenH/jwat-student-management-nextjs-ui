import ClassList from '@/components/list/ClassList';
import React from 'react';

const index = () => {
  return (
    <div className="bg-gray-500 flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-5 text-xl">Enter Class Name</h1>
      <ClassList />
    </div>
  );
};

export default index;
