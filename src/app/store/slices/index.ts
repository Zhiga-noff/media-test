import { newsSlice } from "./news.slices";

export const reducerSlices = {
  [newsSlice.name]: newsSlice.reducer,
};
