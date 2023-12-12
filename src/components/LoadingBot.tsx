import { useEffect, useRef, useState } from 'react';
import LoadingBubble from './LoadingBubble';
import Machine from './Machine';
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
  return (
    <li className='flex h-full max-h-72 w-40 flex-grow-0 flex-col items-center justify-end gap-5'>
      <LoadingBubble message='loading' duration={1000} startDelay={startAt} />
      <Machine name={name} symbol={symbol} />
    </li>
  );
}
