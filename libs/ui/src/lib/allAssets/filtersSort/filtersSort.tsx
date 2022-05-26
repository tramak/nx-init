import React from 'react';
import cl from 'classnames';
import styles from './filtersSort.module.scss';
import { SvgSort } from '../../svg/svgSort';
import { useWindowClick } from '../../../useEffect/useWindowClick';

const sortData = [
  {
    value: 'popularity',
    title: 'по Популярности'
  },
  {
    value: 'profitability',
    title: 'по Популярности'
  },
  {
    value: 'tokenPrice',
    title: 'по Цене токена'
  },
  {
    value: 'date',
    title: 'по Дате добавления'
  }
];

export interface IFilterSortProps {
  value?: string;
  setValue: (value: string) => void;
}

export const FilterSort: React.FC<IFilterSortProps> = (
  {
    value,
    setValue
  }
) => {
  const [isOpen, setOpen] = useWindowClick();

  return (
    <div className={styles.sortWrapper}>
      <div
        className={cl(styles.filter, {
          [styles.active]: !!value
        })}
        onClick={() => setOpen(v => !v)}
      >
        <span className={styles.iconSort}>
          <SvgSort />
        </span>
        <span className={styles.label}>Сортировка</span>
      </div>

      {isOpen && (
        <div className={styles.sortMenu}>
          {sortData.map(sort => (
            <div
              key={sort.value}
              className={cl(styles.sortMenuItem, {
                [styles.active]: sort.value === value
              })}
              onClick={() => setValue(sort.value)}
            >
              {sort.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
};
