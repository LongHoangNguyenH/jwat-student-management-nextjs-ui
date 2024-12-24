import { Class } from '@/types/classType';
import { GetStaticPaths, GetStaticProps } from 'next';

interface PageProps {
  classes: Class;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const listclass: Class[] = await fetch('http://localhost:3000/classes/all', {
    headers: [['Authorization', 'Bearer admin']],
  }).then(res => res.json());

  return {
    paths: listclass.map(c => ({
      params: {
        id: String(c.classId),
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const classes: Class = await fetch(`http://localhost:3000/classes/byId/${params?.id}`, {
    headers: [['Authorization', 'Bearer admin']],
  }).then(res => res.json());

  return {
    props: {
      classes,
    },
    revalidate: 60,
  };
};

export default function Page({ classes }: PageProps) {
  return (
    <section className="flex flex-col justify-center items-center w-[300px]">
      <h1>Class Detail</h1>
      <table className="table-auto border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Class ID
            </th>
            <th className="px-6 py-4 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              ClassName
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 w-full">{classes.classId}</td>
            <td className="px-6 py-4 w-full">{classes.className}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
