import { useRef } from 'react';
import { countState } from './components/Bots';
import TokenForm from './components/TokenForm';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { fetchErrorState } from './store/atom';
import Bots from './components/Bots.tsx';

export const restartCountState = atom({
  key: 'restartCount',
  default: 0,
});

function App() {
  const [fetchError, _] = useRecoilState(fetchErrorState);
  const count = useRecoilValue(restartCountState);

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-8 bg-slate-600'>
      {fetchError && (
        <div className='flex h-full w-full flex-col items-center justify-center gap-8 bg-slate-600'>
          <div className='text-4xl'>Invalid token</div>
          <TokenForm />
        </div>
      )}
      {!fetchError && <Bots key={count} initialMessage={[]} />}
    </div>
  );
}

export default App;
