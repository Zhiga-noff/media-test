import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNewslice, setNewsInfo } from "../../store/slices/news.slices";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../shared/libs/services/api.services";
import { GET_POSTS } from "../../../shared/libs/constant/api.constant";
import { Posts } from "../../../shared/libs/types/news.types";

const NewsPage = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const { title, body, reactions, tags } = useSelector(getNewslice);
  const dispatch = useDispatch()


  useEffect(() => {
    if (title === '') {
      const getInfoPost = async (newsId: string | undefined) => {
        try {
          const response = await api.get<Posts>(GET_POSTS + '/' + newsId)
          dispatch(setNewsInfo(response.data))
        } catch (err) {
          navigate('/not-found')
        }
      }
      getInfoPost(newsId)
    }

  }, []);

  return (
    <div>

    </div>
  );
};

export default NewsPage;