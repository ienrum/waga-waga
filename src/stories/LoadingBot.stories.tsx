import LoadingBot from '@/components/LoadingBot';
import type { Props } from '@/components/LoadingBot';

export default {
  title: 'Bot/LoadingBot',
  component: LoadingBot,
};

const Template = (args: Props) => <LoadingBot {...args} />;

export const Raven = Template.bind({});
