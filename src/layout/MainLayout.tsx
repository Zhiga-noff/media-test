import React, { FC } from 'react';
import { Breadcrumb, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import styles from './MainLayout.module.scss'

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
        <Breadcrumb className={styles.breadcrumb}
          items={[{ title: 'Главная' }, { title: 'Не основная' }]}
        />
        {children}
      </Content>
    </Layout>
  );
};
