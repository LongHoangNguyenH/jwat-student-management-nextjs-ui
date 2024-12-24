import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export default function Page() {
  const [className, setClassName] = useState('');
  const router = useRouter();

  const submitClass = useCallback(async () => {
    const res = await fetch('http://localhost:3000/classes', {
      method: 'POST',
      headers: [
        ['Authorization', 'Bearer admin'],
        ['Content-Type', 'application/json'],
      ],
      body: JSON.stringify({
        className,
      }),
    });
    console.log(res);
    const resContent = await res.json();
    console.log(resContent);
    if (res.ok) {
      router.replace('/classes/view');
      return;
    }

    alert(resContent.devMessage);
  }, [className]);

  return (
    <div className='max-h-screen'>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitClass();
        }}
      >
        <div className="flex flex-col justify-center items-center mt-10">
          <label htmlFor="form--class-name">Fill Class name</label>
          <input
            id="form--class-name"
            className="flex justify-center border-2 border-gray-600 rounded-sm px-2 py-1 mb-2 w-[300px]"
            name="className"
            type="text"
            value={className}
            onChange={e => setClassName(e.target.value)}
          />

          <input
            type="submit"
            value="Create Class"
            className="flex justify-center w-[300px] bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900"
          />
        </div>
      </form>
    </div>
  );
}
