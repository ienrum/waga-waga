import LoadingBubble from '@/components/LoadingBubble';
import type { Props } from '@/components/LoadingBubble';

export default {
  title: 'Bot/LoadingBubble',
  component: LoadingBubble,
};

export const Default = (args: Props) => <LoadingBubble {...args} />;
