import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import {
  commentSelector,
  isTalkingState,
  countSelector,
  commentState,
} from '@/store/atom';
import { useEffect, useRef, useState } from 'react';

import Bot from './Bot';

interface Robot {
  name: string;
  comments: comment[];
}

interface comment {
  order: number;
  message: string;
}

export default function Bots() {
  const comments = ['hello', 'hi guys~', 'bye', 'see you', 'good bye'];
  const [isTalking, setIsTalking] = useState(true);
  const [count, setCount] = useState(0);

  const robots: Robot[] = [
    { name: 'waga', comments: [] },
    { name: 'woba', comments: [] },
    { name: 'mogo', comments: [] },
  ];

  const commentsLength = comments.length;
  const readingTimes: number[] = [];

  comments.map((comment, commentIndex) => {
    let robotIndex = 0;
    while (
      robots[robotIndex].comments.length > 0 &&
      robots[robotIndex].comments[robots[robotIndex].comments.length - 1]
        .order ===
        commentIndex - 1
    ) {
      robotIndex = Math.floor(Math.random() * robots.length);
    }
    robots[robotIndex].comments.push({ order: commentIndex, message: comment });
    readingTimes.push(calculateReadingSpeed(comment));
  });

  useEffect(() => {
    if (!isTalking) return;
    const timeout = setTimeout(
      () => {
        if (count >= commentsLength) {
          setCount(commentsLength);
          setIsTalking(false);
        }
        setCount(count + 1);
      },
      readingTimes[count] * 1000 + 1000,
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [count]);

  return (
    <ul className='flex h-full w-full flex-row items-center justify-center gap-4'>
      {robots.map((robot) => {
        return (
          <Bot
            key={robot.name}
            count={isTalking ? count : commentsLength}
            name={robot.name}
            comments={robot.comments}
            readingTime={readingTimes[count]}
          />
        );
      })}
    </ul>
  );
}

function calculateReadingSpeed(sentence: string) {
  const wordsPerMinute = 200;
  const words = sentence.split(' ');
  const wordCount = words.length;
  const readingTimeInMinutes = wordCount / wordsPerMinute;
  const readingTimeInSeconds = readingTimeInMinutes * 60;
  return readingTimeInSeconds;
}
