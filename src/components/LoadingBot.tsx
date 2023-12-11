import { useEffect, useRef } from 'react';

export default function LoadingBot({
  name,
  duration,
}: {
  name: string;
  duration: number;
}) {
  const pRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      pRef.current!.style.opacity = '100';
      imgRef.current!.style.opacity = '100';
    }, duration);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <li className='flex h-full max-h-72 w-40 flex-grow-0 flex-col items-center justify-end gap-5'>
      <p
        ref={pRef}
        className='inline w-32 max-w-sm break-words rounded-md bg-slate-800 p-2 text-center text-slate-200 opacity-0 shadow-2xl duration-500'>
        . . .
      </p>
      <span
        className='material-symbols-outlined text-9xl  text-slate-900 opacity-50 duration-500'
        ref={imgRef}>
        raven
      </span>
      <h1 className='inline-block text-slate-400'>{name}</h1>
    </li>
  );
}
