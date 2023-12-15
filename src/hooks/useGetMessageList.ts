import { useEffect, useState } from 'react';
import { SUBJECT_LIST } from '@/store/subject-list';
import { fetchApi } from '@/utils/fetchApi';

const useGetMessageList = (
  initialValue: string[],
  isFetch: boolean,
): [string[], boolean] => {
  const [comments, setComments] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isLoading = false;
    if (!isFetch) return;
    const fetchComments = async () => {
      try {
        isLoading = true;
        const id = getRandomInt(SUBJECT_LIST.length);
        fetchApi(SUBJECT_LIST[id]).then((result) => {
          if (!isLoading) return;
          const filteredComments = filterComment(
            result ? result.choices[0].message.content : '',
          );
          setComments(filteredComments);
          isLoading = false;
        });
      } catch (e) {
        console.log('useGetMessageList: ', e);
        setIsError(true);
      }
    };

    fetchComments();
    return () => {
      isLoading = false;
    };
  }, [isFetch]);
  return [comments ? comments : initialValue, isError];
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
