import { api } from './api.services';
import { GET_POSTS } from "../constant/api.constant";
import { DataNews } from "../types/news.types";

export const getInfiniteNewsServices = async ({ pageParam = 0 }) => {
  const limit = 10;

  // Указываем тип <DataNews> — это ответ от API
  const response = await api.get<DataNews>(GET_POSTS, {
    params: { limit, skip: pageParam },
  });

  return {
    posts: response.data.posts,
    nextCursor: response.data.skip + response.data.limit < response.data.total
      ? response.data.skip + response.data.limit
      : undefined,
  };
};

