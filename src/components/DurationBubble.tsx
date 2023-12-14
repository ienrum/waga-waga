import { useEffect, useState } from 'react';
import Bubble from './Bubble';

import { useSetRecoilState } from 'recoil';
import { countState } from './Bots';

export interface Props {
  message: string;
  duration: number;
  order: number;
}

const DurationBubble = ({ message, duration = 1000, order }: Props) => {
  const [toggle, setToggle] = useState(true);
  const setCount = useSetRecoilState(countState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggle(false);
      setCount((prev) => prev + 1);
    }, duration);
    return () => {
      setToggle(true);
      clearTimeout(timeout);
    };
  }, [duration, order]);

  return <Bubble message={message} isOn={toggle} />;
};

export default DurationBubble;
