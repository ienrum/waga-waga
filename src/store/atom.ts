import { selector, atom } from 'recoil';
import { fetchApi } from '@/utils/fetchApi';

import { SUBJECT_LIST } from './subject-list';

export const isTalkingState = atom({
  key: 'isTalkingState',
  default: true,
});

export const fetchError = atom({
  key: 'fetchError',
  default: false,
});

export const fetchErrorState = selector({
  key: 'fetchResultState',
  get: async ({ get }) => {
    get(fetchError);
    if (sessionStorage.getItem('auth') === 'true') {
      return false;
    }
    const result = await fetchApi('test');
    if (result === 'error') {
      return true;
    }
    sessionStorage.setItem('auth', 'true');
    return false;
  },
  set: ({ set }, newValue) => {
    set(fetchErrorState, newValue);
  },
});

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const countSelector = selector({
  key: 'countSelector',
  get: ({ get }) => {
    return get(countState);
  },
  set: ({ set }, newValue) => {
    set(countState, newValue);
  },
});

export const commentState = atom({
  key: 'commentState',
  default: [''],
});

export const commentSelector = selector({
  key: 'commentSelector',
  get: async ({ get }) => {
    get(commentState);
    const index = getRandomInt(SUBJECT_LIST.length);
    const result = await fetchApi(SUBJECT_LIST[index]);
    const filteredComments = filterComment(
      result ? result.choices[0].message.content : '',
    );

    return filteredComments;
  },
  set: ({ set }, newValue) => {
    set(commentState, newValue);
  },
});

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
