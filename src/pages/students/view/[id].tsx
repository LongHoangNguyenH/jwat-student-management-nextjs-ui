import { Student } from '@/types/studentType';
import { GetStaticPaths, GetStaticProps } from 'next';

interface PageProps {
  student: Student;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const listStudent: Student[] = await fetch('http://localhost:3000/students/all', {
    headers: [['Authorization', 'Bearer admin']],
  }).then(res => res.json());

  return {
    paths: listStudent.map(student => ({
      params: {
        id: String(student.studentId),
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const student: Student = await fetch(`http://localhost:3000/students/byId/${params?.id}`, {
    headers: [['Authorization', 'Bearer admin']],
  }).then(res => res.json());

  return {
    props: {
      student,
    },
    revalidate: 60,
  };
};

export default function Page({ student }: PageProps) {
  return (
    <div className="flex flex-col justify-center items-center w-[300px]">
      <h1>Class Detail</h1>
      <table className="table-auto border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Student ID
            </th>
            <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              StudentName
            </th>
            <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              ClassName
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 w-full">{student.studentId}</td>
            <td className="px-6 py-4 w-full">{student.studentName}</td>
            <td className="px-6 py-4 w-full">{student.className}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
