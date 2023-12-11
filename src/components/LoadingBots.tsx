import LoadingBot from './LoadingBot';

export interface Props {
  botDatas?: { name: string; symbol: string; startAt: number }[];
}
const LoadingBots = ({
  botDatas = [
    {
      name: 'raven 1',
      symbol: 'raven',
      startAt: 0,
    },
    {
      name: 'raven 2',
      symbol: 'raven',
      startAt: 300,
    },
    {
      name: 'raven 3',
      symbol: 'raven',
      startAt: 600,
    },
  ],
}: Props) => {
  return (
    <ul className='flex h-full w-full flex-row items-center justify-center gap-4'>
      {botDatas.map((botData) => (
        <LoadingBot {...botData} key={botData.name} />
      ))}
    </ul>
  );
};

export default LoadingBots;
