import { useEffect, useRef } from 'react';

export interface Props {
  name: string;
  symbol: string;
  startAt: number;
}
export default function LoadingBot({
  name = 'raven 1',
  symbol = 'raven',
  startAt = 0,
}: Props) {
  const pRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!pRef.current || !imgRef.current) return;
    imgRef.current!.style.opacity = '1';

    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        pRef.current!.style.opacity =
          pRef.current!.style.opacity === '1' ? '0' : '1';
      }, 1000);
    }, startAt);

    return () => {
      imgRef.current!.style.opacity = '0';
      pRef.current!.style.opacity = '0';
      clearInterval(intervalRef.current!);
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
        {symbol}
      </span>
      <h1 className='inline-block text-slate-400'>{name}</h1>
    </li>
  );
}
