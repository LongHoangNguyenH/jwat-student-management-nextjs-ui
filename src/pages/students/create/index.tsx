import StudentForm from '@/components/form/StudentForm';
import React from 'react';

const StudentFormPage = () => {
  return (
    <div className="bg-gray-500 flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-5 text-xl">Fill Student Fields</h1>
      <StudentForm />
    </div>
  );
};

export default StudentFormPage;
