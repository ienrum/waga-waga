import { useEffect, useState } from 'react';
import Bubble from './Bubble';

export interface Props {
  message: string;
  duration: number;
  startDelay: number;
}

const LoadingBubble = ({ message, duration = 1000, startDelay }: Props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let interval: null | NodeJS.Timeout = null;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setToggle((t) => !t);
      }, duration);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [duration]);

  return <Bubble message={message} isOn={toggle} />;
};

export default LoadingBubble;
