import Bot from './Bot';
import useGetRobots from '@/hooks/useGetRobots';
import RestartButton from './RestartButton';

import { atom, useRecoilState, useRecoilValue } from 'recoil';
import LoadingBots from './LoadingBots';
import { isTalkingState } from '@/store/atom';

export const countState = atom({
  key: 'count',
  default: 0,
});

export default function Bots({ initialMessage }: { initialMessage: string[] }) {
  const [isError, robots, messageCount] = useGetRobots(initialMessage);
  const count = useRecoilValue(countState);

  const isLoading = robots[0].comments.length === 0;
  const isTalking = !isLoading && count < messageCount;

  console.log(isLoading, isError, isTalking);
  return (
    <ul className='flex h-full w-full flex-row items-center justify-center gap-4'>
      {isLoading && !isError && <LoadingBots />}
      {isError && <p>Something went wrong</p>}
      {!isLoading && !isError && !isTalking && <RestartButton />}
      {!isLoading &&
        robots.length > 0 &&
        robots.map((robot) => {
          console.log(robot);
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
