import DurationBubble from './DurationBubble';
import Machine from './Machine';

export interface Props {
  count: number;
  name: string;
  comments: comment[];
  readingTime: number;
}

interface comment {
  order: number;
  message: string;
}
export default function Bot({ count, name, comments, readingTime }: Props) {
  const comment = comments.filter((comment) => comment.order === count)[0];

  return (
    <li className='flex h-full max-h-72 w-40 flex-col items-center justify-end gap-4'>
      {comment && (
        <DurationBubble
          message={comment.message}
          duration={readingTime * 1000 + 1000}
          order={count}
        />
      )}
      <Machine name={name} symbol='raven' order={count} isTalking={!!comment} />
    </li>
  );
}
