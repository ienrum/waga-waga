import React, { useEffect, useRef } from 'react';

interface Props {
  count: number;
  name: string;
  comments: comment[];
}

interface comment {
  order: number;
  message: string;
}
export default function Bot({ count, name, comments }: Props) {
  const pRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (pRef.current === null || imgRef.current === null) return;
    pRef.current.style.opacity = '100';
    imgRef.current.style.opacity = '1';
    imgRef.current.style.transform = 'translateY(-1rem)';

    const timeout = setInterval(() => {
      if (imgRef.current === null) return;
      imgRef.current.style.rotate = '5deg';
    }, 250);

    const timeout2 = setInterval(() => {
      if (imgRef.current === null) return;
      imgRef.current.style.rotate = '-5deg';
    }, 500);

    return () => {
      clearInterval(timeout);
      clearInterval(timeout2);
      if (imgRef.current === null) return;
      imgRef.current.style.opacity = '0.5';
      imgRef.current.style.transform = 'translateY(0)';
      imgRef.current.style.rotate = '0deg';
    };
  }, [count]);

  const comment = comments.filter((comment) => comment.order === count)[0];

  return (
    <li className='flex h-full max-h-72 w-40 flex-col items-center justify-end gap-4'>
      {comment && (
        <p
          className='inline w-32 max-w-sm -translate-y-4 break-words rounded-md bg-slate-800 p-2 text-center text-slate-200 opacity-0 shadow-2xl duration-500'
          ref={pRef}>
          {comment.message}
        </p>
      )}
      <span
        className='material-symbols-outlined  text-9xl text-slate-900 opacity-50 duration-500'
        ref={imgRef}>
        raven
      </span>
      <h1 className='inline-block text-slate-400'>{name}</h1>
    </li>
  );
}
