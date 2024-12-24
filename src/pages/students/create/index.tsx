import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
export default function Page() {
  // return <StudentCreationForm />;
  const [studentName, setStudentName] = useState('');
  const [className, setClassName] = useState('');
  const router = useRouter();

  const submitStudentCreationForm = useCallback(async () => {
    const res = await fetch('http://localhost:3000/students', {
      method: 'POST',
      headers: [
        ['Authorization', 'Bearer admin'],
        ['Content-Type', 'application/json'],
      ],
      body: JSON.stringify({
        studentName,
        className,
      }),
    });

    const resContent = await res.json();
    if (res.ok) {
      router.replace('/students/view');
      return;
    }

    alert(resContent.devMessage);
  }, [studentName, className]);

  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      <form
        onSubmit={e => {
          e.preventDefault();
          submitStudentCreationForm();
        }}
      >
        <label htmlFor="form--student-name">Student name</label>
        <input
          id="form--student-name"
          className="flex justify-center border border-gray-600 rounded-sm px-2 py-1 mb-2 w-[300px]"
          name="studentName"
          type="text"
          value={studentName}
          onChange={e => setStudentName(e.target.value)}
        />

        <label htmlFor="form--class-name">Class name</label>
        <input
          id="form--class-name"
          className="flex justify-center border border-gray-600 rounded-sm px-2 py-1 mb-2 w-[300px]"
          name="className"
          type="text"
          value={className}
          onChange={e => setClassName(e.target.value)}
        />

        <div className="items-center flex justify-center items-center">
          <input
            type="submit"
            value="Create Student"
            className="flex justify bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-900"
          />

          <Link
            href={'/students/view'}
            className="flex justify ml-5 bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            View Students
          </Link>
        </div>
      </form>
    </div>
  );
}
