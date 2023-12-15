import { useEffect, useState } from 'react';
import { SUBJECT_LIST } from '@/store/subject-list';
import { fetchApi } from '@/utils/fetchApi';
import useAsync from './useAsync';
import { CancelToken } from 'axios';

const useGetMessageList = (
  initialValue: string[],
): [string[], boolean, boolean] => {
  const [data, isLoading, isError] = useAsync(
    (token: CancelToken) => fetchApi(getSubject(), token),
    [],
  );
  const [messageList, setMessageList] = useState<string[] | null>(null);

  useEffect(() => {
    if (data) {
      const result = filterComment(data);
      setMessageList(result);
    }
  }, [data]);

  return [messageList ? messageList : initialValue, isLoading, isError];
};

const getSubject = () => {
  const subjectIndex = getRandomInt(SUBJECT_LIST.length);
  return SUBJECT_LIST[subjectIndex];
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const filterComment = (result: string) => {
  // when result is array
  const matchingResult = result.match(/\[(.*?)\]/g)
    ? result.match(/\[(.*?)\]/g)![0]
    : '[]';
  if (JSON.parse(matchingResult)[0]) {
    return JSON.parse(matchingResult) as string[];
  } else {
    return [];
  }
};

export default useGetMessageList;
