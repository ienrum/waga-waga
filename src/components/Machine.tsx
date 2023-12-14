import { useEffect, useRef } from 'react';

export interface Props {
  name: string;
  symbol: string;
  isTalking?: boolean;
  order: number;
}

const Machine = ({ name, symbol, isTalking, order }: Props) => {
  const imgRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!isTalking) return;
    const timeout = setTimeout(() => {
      if (imgRef.current) {
        imgRef.current.style.opacity = '1';
        imgRef.current.style.transform = 'translateY(-1rem)';
      }
    }, 250);

    const timeout1 = setInterval(() => {
      if (imgRef.current === null) return;
      imgRef.current.style.rotate = '5deg';
    }, 250);

    const timeout2 = setInterval(() => {
      if (imgRef.current === null) return;
      imgRef.current.style.rotate = '-5deg';
    }, 500);

    return () => {
      clearTimeout(timeout);
      clearInterval(timeout1);
      clearInterval(timeout2);
      if (imgRef.current === null) return;
      imgRef.current.style.opacity = '0.5';
      imgRef.current.style.transform = 'translateY(0)';
      imgRef.current.style.rotate = '0deg';
    };
  }, [imgRef, order, isTalking]);

  return (
    <>
      <span
        className='material-symbols-outlined text-9xl text-slate-900 opacity-50 duration-500'
        ref={imgRef}>
        {symbol}
      </span>
      <h1 className='inline-block text-slate-400'>{name}</h1>
    </>
  );
};

export default Machine;
