import { Student } from '@/types/studentType';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export const getServerSideProps = (async ({ query }) => {
  let students: Student[] = [];
  const studentName = query['studentname'];
  const className = query['classname'];
  console.log('query', query);
  console.log('studentName', studentName);
  console.log('className', className);

  if (studentName != null) {
    const res = await fetch(`http://localhost:3000/students/byName?searchName=${studentName}`, {
      headers: [
        ['Authorization', 'Bearer admin'],
        ['Content-Type', 'application/json'],
      ],
    });
    students = res.ok ? await res.json() : [];
  } else if (className != null) {
    const res = await fetch(`http://localhost:3000/students/byClassname?searchClassName=${className}`, {
      headers: [
        ['Authorization', 'Bearer admin'],
        ['Content-Type', 'application/json'],
      ],
    });
    console.log('res: ', res);
    students = res.ok ? await res.json() : [];
  } else {
    const res = await fetch('http://localhost:3000/students/all', {
      headers: [['Authorization', 'Bearer admin']],
    });
    students = res.ok ? await res.json() : [];
  }

  return { props: { students } };
}) satisfies GetServerSideProps<{ students: Student[] }>;

export default function Page({ students }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [studentSearchByName, setStudentSearchByName] = useState('');
  const [studentSearchByClassname, setstudentSearchByClassname] = useState('');

  const submitStudentSearchByName = useCallback(async () => {
    router.push(`/students/view?studentname=${studentSearchByName}`);
    setStudentSearchByName('');
  }, [studentSearchByName]);

  const submitStudentSearchByClassName = useCallback(async () => {
    router.push(`/students/view?classname=${studentSearchByClassname}`);
    setstudentSearchByClassname('');
  }, [studentSearchByClassname]);

  return (
    <section className="flex items-center flex-col">
      <h1 className="text-3xl font-bold items-center flex justify-center">All students</h1>

      <div className="flex flex-row">
        <div className="flex justify-start">
          <Link href={'/students/create'} className="bg-gray-500 text-white px-4 py-5 rounded hover:bg-blue-900">
            Create Student
          </Link>
        </div>

        <div className="flex justify-start mt-2 ml-5">
          <Link href={'/'} className="bg-gray-500 text-white px-4 py-3 rounded hover:bg-blue-900">
            Home
          </Link>
        </div>

        <div className="flex flex-row">
          <form
            onSubmit={e => {
              e.preventDefault();
              submitStudentSearchByName();
            }}
            className="ml-5"
          >
            <label htmlFor="search-by-name">Search by name</label>
            <input
              id="search-by-name"
              className="flex justify-center border border-gray-600 rounded-sm px-2 py-1 mb-2"
              type="text"
              value={studentSearchByName}
              onChange={e => setStudentSearchByName(e.target.value)}
            />
          </form>

          <form
            onSubmit={e => {
              e.preventDefault();
              submitStudentSearchByClassName();
            }}
            className="ml-5"
          >
            <label htmlFor="form--search-by-class">Search by class name</label>
            <input
              id="form--search-by-class"
              className="flex justify-center border border-gray-600 rounded-sm px-2 py-1 mb-2"
              type="text"
              value={studentSearchByClassname}
              onChange={e => setstudentSearchByClassname(e.target.value)}
            />
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center mt-5">
        <table className="table-auto border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ClassName
              </th>
              <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                StudentName
              </th>
              <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, index) => (
              <>
                <tr key={`${index}`}>
                  <td className="px-6 py-4 w-full">{s.className}</td>
                  <td className="px-6 py-4 w-full">{s.studentName}</td>
                  <td className="px-6 py-4 w-full">
                    <span>
                      <Link href={`students/view/${s.studentId}`} className="hover:bg-green-400 flex justify-center">
                        Detail
                      </Link>
                    </span>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
