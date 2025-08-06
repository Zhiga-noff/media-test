import React, { FC } from 'react';
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import styles from './MainLayout.module.scss'
import { MainBreadcrumbs } from "../shared/ui/main-breadcrumbs/MainBreadcrumbs";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}></div>
      </Header>
      <Content className={styles.layout}>
        <MainBreadcrumbs/>
        {children}
      </Content>
    </Layout>
  );
};
