import React from 'react';
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { Card, Space, Tag } from "antd";
import { Posts } from "../../libs/types/news.types";
import styles from "./NewsCard.module.scss";

export const NewsCard = (props: Posts) => {
  const { title, body, tags, views, userId, reactions } = props

  return (
    <Card
      variant={"outlined"}
      hoverable

    >
      <Title level={4}>
        {title}
      </Title>

      <Tag color="pink" className={styles.likes}>
        <Title level={5} className={styles.titleLike}>Лайки</Title>
        {reactions.likes}
      </Tag>

      <Paragraph
        ellipsis={{ rows: 3, expandable: false }}
      >
        {body}
      </Paragraph>

      <Space wrap>
        {tags.map((tag: string) => (
          <Tag key={tag} color="green">
            #{tag}
          </Tag>
        ))}
      </Space>

    </Card>
  );
};