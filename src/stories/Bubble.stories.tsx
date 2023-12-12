import Bubble from '@/components/Bubble';
import type { Props } from '@/components/Bubble';

export default {
  title: 'Bot/Bubble',
  component: Bubble,
  argTypes: {
    message: { control: 'text' },
    isOn: { control: 'boolean' },
  },
  args: {
    message: 'hello',
    isOn: true,
  },
};

export const Raven = (args: Props) => <Bubble {...args} />;
