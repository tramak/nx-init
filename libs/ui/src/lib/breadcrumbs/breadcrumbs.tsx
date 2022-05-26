import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumbs.module.scss';

interface IBreadcrumb {
  title: string;
  link?: string
}
export interface IBreadcrumbsProps {
  data?: IBreadcrumb[];
}
export const Breadcrumbs: React.FC<IBreadcrumbsProps> = (
  {
    data
  }
) => {
  if (!data) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {data?.map((item, i) => (
        <li className={styles.item}>
          {i !== 0 && <span className={styles.sep}>/</span>}
          {item.link ? (
            <Link to={item.link} className={styles.link}>
              {item.title}
            </Link>
          ) : item.title}
        </li>
      ))}
    </ul>
  )
};
