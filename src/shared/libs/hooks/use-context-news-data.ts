import { Posts } from "../types/news.types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewslice, setNewsInfo } from "../../../app/store/slices/news.slices";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api.services";
import { GET_POSTS } from "../constant/api.constant";

export const useContextNewsData = (): Posts => {
  const contextNews: Posts = useSelector(getNewslice)
  const dispatch = useDispatch();
  // const [newsData, setNewsData] = useState<Posts>(contextNews)
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getInfoPost = async (newsId: string | undefined) => {
      try {
        const response = await api.get<Posts>(GET_POSTS + newsId)
        dispatch(setNewsInfo(response.data))
      } catch (err) {
        console.log(err)
        navigate('/not-found')
      }
    }

    if (pathname === '/') {
      return () => {
      }
    }
    if (contextNews.title === '') {
      getInfoPost(pathname)
    }
  }, [pathname])

  return contextNews
}