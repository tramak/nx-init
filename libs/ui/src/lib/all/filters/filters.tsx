import React from 'react';
import cl from 'classnames';
import styles from 'filters.module.scss';

export interface IFilters {

}

export const Filters: React.FC<IFilters> = () => {
  return (
    <div className={cl(styles.container, styles.filters)}>

    </div>
  );
};
