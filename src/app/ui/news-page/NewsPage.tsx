import React from 'react';
import { useContextNewsData } from "../../../shared/libs/hooks/use-context-news-data";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import styles from "./NewsPage.module.scss";
import { Space, Tag } from "antd";

const NewsPage = () => {
  const { title, body, tags, reactions } = useContextNewsData()

  return (
    <>
      <Title level={1}>{title}</Title>
      <Tag color="pink" className={styles.likes}>
        <Title level={5} className={styles.titleLike}>Лайки</Title>
        {reactions.likes}
      </Tag>
      <Paragraph className={styles.text}
      >{body}</Paragraph>
      <Space wrap>
        {tags.map((tag: string) => (
          <Tag key={tag} color="green">
            #{tag}
          </Tag>
        ))}
      </Space>
    </>
  );
};

export default NewsPage;