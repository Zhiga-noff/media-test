import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Posts } from "../../../shared/libs/types/news.types";
import { RootState } from "../index";


const initialState: Posts = {
  id: 0,
  title: '',
  body: '',
  tags: [''],
  reactions: { likes: 0, dislikes: 0 },
  views: 0,
  userId: 0,
};

export const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    setNewsInfo: (state, { payload }: PayloadAction<Posts>) => {
      return payload
    },
    setClearInfo: (state) => {
      return initialState
    },
  },
});

export const getNewslice = (store: RootState) => store.newsSlice;
export const { setNewsInfo, setClearInfo } = newsSlice.actions;
