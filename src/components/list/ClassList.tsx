import React, { useState } from 'react';

const ClassList = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'Toán' },
    { id: 2, name: 'Lý' },
    { id: 3, name: 'Hóa' },
  ]);
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="bg-red-50">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Class Name</th>
            </tr>
          </thead>
          <tbody>
            {classes.map(cls => (
              <tr key={cls.id}>
                <td>{cls.id}</td>
                <td>{cls.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassList;
