import axios, { CancelToken } from 'axios';
import { useEffect, useState } from 'react';
interface GPTResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
    index: number;
    logprobs: any | null;
    finish_reason: string;
  }>;
}

type UseAsyncType = (
  callback: (cancelToken: CancelToken) => Promise<GPTResponse>,
  deps: any,
) => [string | null, boolean, boolean];

const useAsync: UseAsyncType = (callback, deps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<string | null>(null);

  const fetchData = async (token: CancelToken) => {
    try {
      setIsLoading(true);
      const result = await callback(token);
      setData(result.choices[0].message.content);
    } catch (e) {
      if (axios.isCancel(e)) {
        console.error('cancelled');
        return;
      } else {
        console.error(e);
        setIsError(true);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    fetchData(source.token);

    return () => {
      source.cancel('canceled');
      setIsLoading(true);
      setIsError(false);
      setData(null);
    };
  }, deps);

  return [data, isLoading, isError];
};
export default useAsync;
