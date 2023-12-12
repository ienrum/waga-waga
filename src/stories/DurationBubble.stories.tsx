import DurationBubble from '@/components/DurationBubble';
import type { Props } from '@/components/DurationBubble';

export default {
  title: 'Bot/DurationBubble',
  component: DurationBubble,
  argTypes: {
    message: { control: 'text' },
    duration: {
      control: { type: 'number' },
    },
    order: { control: { type: 'number' } },
  },
  args: {
    message: 'hello',
    duration: 1000,
    order: 0,
  },
};

export const Default = (args: Props) => <DurationBubble {...args} />;
