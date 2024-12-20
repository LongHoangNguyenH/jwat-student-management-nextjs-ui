import React from 'react';

const StudentForm = () => {
  return (
    <form className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-md space-y-4">

        <input
          type="text"
          id="studentName"
          name="studentName"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring"
          placeholder="Student Name"
        />

        <input
          type="text"
          id="className"
          name="className"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring"
          placeholder="Class Name"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default StudentForm;