import Bot from './Bot';
import { Robot, makeRobots } from '@/utils/makeRobots';
import RestartButton from './RestartButton';

import { atom, useRecoilValue } from 'recoil';
import LoadingBots from './LoadingBots';
import { useEffect, useState } from 'react';
import useGetMessageList from '@/hooks/useGetMessageList';

export const countState = atom({
  key: 'count',
  default: 0,
});

export default function Bots({ initialMessage }: { initialMessage: string[] }) {
  const count = useRecoilValue(countState);

  const [messageList, isLoading, isError] = useGetMessageList(initialMessage);
  const messageCount = messageList.length;

  const [robots, setRobots] = useState<Robot[] | null>(null);
  useEffect(() => {
    if (messageList.length > 0) {
      setRobots(makeRobots(messageList));
    }
    return () => {
      setRobots(null);
    };
  }, [messageList]);

  const isTalking = !isLoading && count < messageCount;

  return (
    <ul className='flex h-full w-full flex-row items-center justify-center gap-4'>
      {isLoading && !isError && <LoadingBots />}
      {isError && <p>Something went wrong</p>}
      {!isLoading && !isError && !isTalking && <RestartButton />}
      {!isLoading &&
        robots?.map((robot) => {
          return (
            <Bot
              key={robot.name}
              count={count}
              name={robot.name}
              comments={robot.comments}
            />
          );
        })}
    </ul>
  );
}
