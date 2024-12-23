import StudentList from '@/components/list/StudentList';
import React from 'react';

const index = () => {
  return (
    <div className="bg-gray-500 lex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-5 text-xl">Fill Student Fields</h1>
      <StudentList />
    </div>
  );
};

export default index;
