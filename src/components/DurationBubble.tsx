import { useEffect, useState } from 'react';
import Bubble from './Bubble';

export interface Props {
  message: string;
  duration: number;
  order: number;
}

const DurationBubble = ({ message, duration = 1000, order }: Props) => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggle(false);
    }, duration);
    return () => {
      clearTimeout(timeout);
    };
  }, [duration, order]);

  return <Bubble message={message} isOn={toggle} />;
};

export default DurationBubble;
