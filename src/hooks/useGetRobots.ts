import { useEffect, useState } from 'react';
import useGetMessageListFn from './useGetMessageList';

export interface Robot {
  name: string;
  comments: comment[];
}

export interface comment {
  order: number;
  message: string;
  time: number;
}
const useGetRobots = (initialMessage: string[]): [boolean, Robot[], number] => {
  const [messageList, isError] = useGetMessageListFn(initialMessage);

  const [robots, setRobots] = useState<Robot[]>([
    { name: 'robot1', comments: [] },
    { name: 'robot2', comments: [] },
    { name: 'robot3', comments: [] },
  ]);

  useEffect(() => {
    if (messageList.length === 0) return;

    let prevRobotIndex = 0;
    messageList.forEach((message, index) => {
      const order = index;
      const time = calculateReadingSpeed(message);
      const comment = { order, message, time };

      let robotIndex = getRandomInt(robots.length);
      while (robotIndex === prevRobotIndex) {
        robotIndex = getRandomInt(robots.length);
      }
      prevRobotIndex = robotIndex;

      setRobots((prev) => {
        const newRobots = [...prev];
        newRobots[robotIndex].comments.push(comment);
        return newRobots;
      });
    });
  }, [messageList]);
  return [isError, robots, messageList.length];
};
function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

function calculateReadingSpeed(sentence: string) {
  const wordsPerMinute = 200;
  const words = sentence.split(' ');
  const wordCount = words.length;
  const readingTimeInMinutes = wordCount / wordsPerMinute;
  const readingTimeInSeconds = readingTimeInMinutes * 60;
  return readingTimeInSeconds * 1000;
}

export default useGetRobots;
