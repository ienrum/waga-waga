import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { commentSelector, isTalkingState, countSelector } from '@/store/atom';

export default function RestartButton() {
  const [comments, setComments] = useRecoilState(commentSelector);
  const [isTalking, setIsTalking] = useRecoilState(isTalkingState);
  const [count, setCount] = useRecoilState(countSelector);

  return (
    <button
      className=' absolute left-3/4 top-1/4 rounded-md bg-slate-700 p-2 text-slate-200 hover:bg-slate-400 active:bg-slate-950'
      onClick={() => {
        setComments(['sd']);
        setIsTalking(true);
        setCount(0);
      }}>
      Restart
    </button>
  );
}
