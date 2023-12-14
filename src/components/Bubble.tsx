import { useEffect, useRef } from 'react';

export interface Props {
  message: string;
  isOn: boolean;
}

const Bubble = ({ message, isOn }: Props) => {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!pRef.current) return;
    if (isOn) {
      const timeout = setTimeout(() => {
        if (!pRef.current) return;
        pRef.current.style.opacity = '1';
        clearTimeout(timeout);
      }, 250);
    } else {
      const timeout = setTimeout(() => {
        if (!pRef.current) return;
        pRef.current.style.opacity = '0';
        clearTimeout(timeout);
      }, 250);
    }
    return () => {
      if (!pRef.current) return;
      pRef.current.style.opacity = '0';
    };
  }, [pRef, isOn]);

  return (
    <p
      className='inline w-32 max-w-sm -translate-y-4 break-words rounded-md bg-slate-800 p-2 text-center text-slate-200 opacity-0 shadow-2xl duration-500'
      ref={pRef}>
      {message}
    </p>
  );
};

export default Bubble;
