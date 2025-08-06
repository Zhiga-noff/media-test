import React from 'react';
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getInfiniteNewsServices } from "../../../shared/libs/services/get-infinite-news.services";
import { NewsCard } from "../../../shared/ui/news-card/NewsCard";
import styles from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNewsInfo } from "../../store/slices/news.slices";
import { Posts } from "../../../shared/libs/types/news.types";
import { MockCardNews } from "../../../shared/ui/mock/MockCardNews";


function HomePage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: getInfiniteNewsServices,
    getNextPageParam: (lastPage) => lastPage.nextCursor, // указывает, какой `skip` будет дальше
    initialPageParam: 0,
  });


  const dispatch = useDispatch();

  const clickToCardNews = (payload: Posts) => {
    dispatch(setNewsInfo(payload))
  }
  return (
    <div className="posts-list">
      <InfiniteScroll
        pageStart={0}
        loadMore={() => hasNextPage && !isFetchingNextPage && fetchNextPage()}
        hasMore={hasNextPage}
        useWindow={true}
        element={'div'}
        className={styles.container}
      >{!data?.pages && ''}
        {data?.pages.map((page) =>
          page.posts.map((post: any) => (
            <Link to={'/' + post.id} key={post.id} onClick={() => {
              clickToCardNews(post)
            }}>
              <NewsCard {...post} key={post.id}/>
            </Link>

          ))
        )}
      </InfiniteScroll>
      {status === 'pending' &&
        <div className={styles.container}><MockCardNews/><MockCardNews/><MockCardNews/><MockCardNews/><MockCardNews/>
          <MockCardNews/><MockCardNews/><MockCardNews/><MockCardNews/><MockCardNews/>
        </div>}
    </div>
  );
}

export default HomePage;
