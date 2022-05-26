import React, { useState } from 'react';
import cl from 'classnames';
import { SvgMenu } from '../../svg/svgMenu';
import { SvgMenuList } from '../../svg/svgMenuList';
import { FilterSort } from '../filtersSort/filtersSort';
import { FiltersType } from '../filtersType/filtersType';
import styles from './filters.module.scss';

export interface IFilters {

}

export const Filters: React.FC<IFilters> = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div className={styles.left}>
          <FiltersType setValue={(value) => setFilter(value)} value={filter} />
        </div>

        <div className={styles.right}>
          <FilterSort setValue={(value) => setSort(value)} value={sort} />

          <div className={styles.menuWrapper}>
            <span
              className={cl(styles.iconMenu, {
                [styles.active]: true
              })}
            >
              <SvgMenu />
            </span>
            <span
              className={cl(styles.iconMenu, {
                [styles.active]: false
              })}
            >
              <SvgMenuList />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
