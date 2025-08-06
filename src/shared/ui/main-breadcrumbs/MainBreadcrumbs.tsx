import React, { useEffect, useState } from 'react';
import { Breadcrumb } from "antd";
import styles from "../../../layout/MainLayout.module.scss";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbItemType, BreadcrumbSeparatorType } from "antd/lib/breadcrumb/Breadcrumb";
import { useContextNewsData } from "../../libs/hooks/use-context-news-data";

export const MainBreadcrumbs = () => {
  const originalPageName: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] | undefined = [{
    title: <Link to={'/'}>Новости</Link>
  }]
  const { title } = useContextNewsData()
  const { pathname } = useLocation();

  const [pagesNameArr, setPagesNameArr] = useState<Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] | undefined>(originalPageName)


  useEffect(() => {
    if (pathname === '/') {
      setPagesNameArr(originalPageName)
      return
    }

    if (title !== '') {
      setPagesNameArr(pre => {
        if (pre) {
          return [...pre, { title }]
        }
      });
    }
  }, [pathname])

  return (
    <Breadcrumb className={styles.breadcrumb}
                items={pagesNameArr}
    />
  );
};