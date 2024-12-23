import React, { useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyễn Văn A', className: '10A1' },
    { id: 2, name: 'Trần Thị B', className: '10A2' },
    { id: 3, name: 'Lê Văn C', className: '10A1' },
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1>Danh sách sinh viên</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sinh viên</th>
            <th>Lớp</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
