import { useRef } from 'react';
import TokenForm from './components/TokenForm';
import { useRecoilState } from 'recoil';
import { fetchErrorState } from './store/atom';
import Bots from './components/Bots.tsx';

function App() {
  const [fetchError, _] = useRecoilState(fetchErrorState);
  const count = useRef(0);

  count.current += 1;
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-8 bg-slate-600'>
      {fetchError && (
        <div className='flex h-full w-full flex-col items-center justify-center gap-8 bg-slate-600'>
          <div className='text-4xl'>Invalid token</div>
          <TokenForm />
        </div>
      )}
      {!fetchError && (
        <Bots
          key={count.current}
          initialMessage={['hi', 'whats up?', 'nice to seeyah']}
        />
      )}
    </div>
  );
}

export default App;
