import Link from 'next/link';

export default function Page() {
  return (
    <>
      <section className="h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold">Student Management Next.js</h1>

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[150px] h-10 py-2 px-4 mt-10 rounded">
              <Link href={'/classes/create'}>Create Class</Link>
            </button>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[150px] h-10 py-2 px-4 mt-10 ml-10 rounded">
              <Link href={'/classes/view'}>View Classes</Link>
            </button>
          </div>

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[150px] h-10 py-2 px-4 mt-10 rounded">
              <Link href={'/students/create'}>Create Student</Link>
            </button>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[150px] h-10 py-2 px-4 mt-10 ml-10 rounded">
              <Link href={'/students/view'}>View Student</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
