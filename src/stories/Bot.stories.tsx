import Bot from '@/components/Bot';
import type { Props } from '@/components/Bot';

export default {
  title: 'Bot/Bot',
  component: Bot,
  argTypes: {
    count: { control: 'number' },
    name: { control: 'text' },
    comments: { control: Object },
  },
  args: {
    count: 0,
    name: 'Bot',
    comments: [
      { message: 'hello', order: 0 },
      { message: 'hi guys~', order: 1 },
      { message: 'bye', order: 2 },
      { message: 'see you', order: 0 },
      { message: 'good bye', order: 4 },
    ],
  },
};

export const Default = (args: Props) => <Bot {...args} />;
