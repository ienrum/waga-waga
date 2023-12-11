import LoadingBot from '@/components/LoadingBot';
import type { Props } from '@/components/LoadingBot';

export default {
  title: 'Bot/LoadingBot',
  component: LoadingBot,
  argTypes: {
    name: { control: 'text' },
    symbol: { control: 'text' },
    startAt: { control: 'number' },
  },
};

const Template = (args: Props) => <LoadingBot {...args} />;

export const Raven = Template.bind({});
