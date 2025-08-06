import React from 'react';
import { Card, Skeleton } from "antd";

export const MockCardNews = () => {
  return (
    <Card
      variant={"outlined"}
      hoverable

    >
      <Skeleton
        paragraph={{ rows: 3 }}/>
    </Card>
  );
};