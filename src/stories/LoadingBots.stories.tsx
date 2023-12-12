import LoadingBots from '@/components/LoadingBots';
import type { Props } from '@/components/LoadingBots';

export default {
  title: 'Bot/LoadingBots',
  component: LoadingBots,
};

const Template = (args: Props) => <LoadingBots {...args} />;

export const Raven = Template.bind({});
