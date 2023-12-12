import Bots from '@/components/Bots';

export default {
  title: 'Bot/Bots',
  component: Bots,
};

export const Default = () => (
  <div className='flex h-screen w-screen items-center justify-center'>
    <Bots />
  </div>
);
