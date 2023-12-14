import { useSetRecoilState } from 'recoil';
import { countSelector } from '@/store/atom';

export default function RestartButton() {
  const setCount = useSetRecoilState(countSelector);

  return (
    <button
      className=' absolute left-3/4 top-1/4 rounded-md bg-slate-700 p-2 text-slate-200 hover:bg-slate-400 active:bg-slate-950'
      onClick={() => {
        setCount(0);
      }}>
      Restart
    </button>
  );
}
