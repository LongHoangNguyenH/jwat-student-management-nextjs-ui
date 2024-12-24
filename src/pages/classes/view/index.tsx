import { Class } from '@/types/classType';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

export const getServerSideProps = (async () => {
  let classes: Class[] = [];
  const res = await fetch('http://localhost:3000/classes/all', {
    headers: [['Authorization', 'Bearer admin']],
  });
  classes = res.ok ? await res.json() : [];
  return { props: { classes } };
}) satisfies GetServerSideProps<{ classes: Class[] }>;

export default function ClassPage({ classes }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="items-center">
      <div className="flex flex-row items-center justify-center">
        <div className="flex justify-center mb-2 mt-2">
          <Link href={'/classes/create'} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-900">
            Create Class
          </Link>
        </div>
        <div className="flex justify-start mb-2 mt-2 ml-5">
          <Link href={'/'} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-900">
            Home
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <table className="table-auto border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ClassName
              </th>
              <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.map((s, index) => (
              <>
                <tr key={`${index}`}>
                  <td className="px-6 py-4 w-full">{s.className}</td>
                  <td className="px-6 py-4 w-full">
                    <span>
                      <Link href={`/classes/view/${s.classId}`} className="hover:bg-green-400 flex justify-center">
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
    </div>
  );
}
