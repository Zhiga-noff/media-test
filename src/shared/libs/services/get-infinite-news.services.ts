import { api } from './api.services';

export const getInfiniteNewsServices = async (url: string, limit = 1, skip = 0) => {
  try {
    const { data } = await api.get(url, {
      params: {
        limit,
        skip,
      },
    });

    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
