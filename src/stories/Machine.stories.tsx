import Machine from '@/components/Machine';
import type { Props } from '@/components/Machine';

export default {
  title: 'Bot/Machine',
  component: Machine,
  argTypes: {
    name: { control: 'text' },
    symbol: { control: 'text' },
  },
  args: {
    name: 'Machine',
    symbol: 'raven',
  },
};

export const Default = (args: Props) => <Machine {...args} />;
