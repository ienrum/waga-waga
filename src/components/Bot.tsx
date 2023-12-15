import DurationBubble from './DurationBubble';
import Machine from './Machine';
import { comment } from '@/utils/makeRobots';

export interface Props {
  count: number;
  name: string;
  comments: comment[];
}

export default function Bot({ count, name, comments }: Props) {
  const comment = comments.filter((comment) => comment.order === count)[0];

  return (
    <li className='flex h-full max-h-72 w-40 flex-col items-center justify-end gap-4'>
      {comment && (
        <DurationBubble
          message={comment.message}
          duration={comment.time + 1000}
          order={count}
        />
      )}
      <Machine name={name} symbol='raven' isTalking={!!comment} order={count} />
    </li>
  );
}
