import { useSetRecoilState } from 'recoil';
import { countState } from '@/components/Bots';
import { restartCountState } from '@/App';

export default function RestartButton() {
  const setCount = useSetRecoilState(countState);
  const setRestartCount = useSetRecoilState(restartCountState);

  return (
    <button
      className=' absolute left-3/4 top-1/4 rounded-md bg-slate-700 p-2 text-slate-200 hover:bg-slate-400 active:bg-slate-950'
      onClick={() => {
        setCount(0);
        setRestartCount((prev) => prev + 1);
      }}>
      Restart
    </button>
  );
}
