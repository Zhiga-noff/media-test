import React, { FC, Suspense } from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import styles from './MainLayout.module.scss';
import { MainBreadcrumbs } from '../shared/ui/main-breadcrumbs/MainBreadcrumbs';
import Title from 'antd/es/typography/Title';

interface Props {
  children: React.ReactNode;
}

const LoadingMock = () => (
  <Title style={{ padding: '20px', textAlign: 'center' }}>
    Загружаем страницу...
  </Title>
);

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}></div>
      </Header>
      <Content className={styles.layout}>
        <MainBreadcrumbs />
        <Suspense fallback={<LoadingMock />}>
          {children}
        </Suspense>
      </Content>
    </Layout>
  );
};
