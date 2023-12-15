export interface Robot {
  name: string;
  comments: comment[];
}

export interface comment {
  order: number;
  message: string;
  time: number;
}
export const makeRobots = (messageList: string[]): Robot[] => {
  const robots: Robot[] = [
    {
      name: 'raven 1',
      comments: [],
    },
    {
      name: 'raven 2',
      comments: [],
    },
    {
      name: 'raven 3',
      comments: [],
    },
  ];
  if (messageList.length !== 0) {
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

      robots[robotIndex].comments.push(comment);
    });
  }

  return robots;
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
