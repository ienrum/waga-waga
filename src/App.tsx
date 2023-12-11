import WagaBots from './components/WagaBots';
import React, { useEffect, useState, useRef } from 'react';
import TokenForm from './components/TokenForm';
import { useRecoilState } from 'recoil';
import { fetchErrorState, isTalkingState } from './store/atom';
import RestartButton from './components/RestartButton';
import LoadingBot from './components/LoadingBot.tsx';

function App() {
  const [fetchError, _] = useRecoilState(fetchErrorState);
  const [isTalking, setIsTalking] = useRecoilState(isTalkingState);
  const count = useRef(0);

  count.current += 1;

  const botName = ['waga', 'woba', 'mogo'];
  return (
    <React.Suspense
      fallback={
        <div className='flex h-screen items-center bg-slate-600 pb-24'>
          <ul className='flex h-full w-full flex-row items-center justify-center gap-4'>
            {botName.map((name, i) => (
              <LoadingBot name={name} key={name} duration={(i + 1) * 500} />
            ))}
          </ul>
        </div>
      }>
      <div className='relative flex h-screen items-center bg-slate-600 pb-24'>
        {fetchError && (
          <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
            <div className='text-4xl'>Invalid token</div>
            <TokenForm />
          </div>
        )}
        {!fetchError && <WagaBots key={count.current} />}
        {!isTalking && <RestartButton />}
      </div>
    </React.Suspense>
  );
}

export default App;
