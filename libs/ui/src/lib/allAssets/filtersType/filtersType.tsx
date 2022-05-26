import React, { useState } from 'react';
import cl from 'classnames';
import { SvgChevronDown } from '../../svg/svgChevronDown';
import { SvgLocation } from '../../svg/svgLocation';
import { SvgCar } from '../../svg/svgCar';
import { SvgHome } from '../../svg/svgHome';
import { SvgFilterAll } from '../../svg/svgFilterAll';
import styles from './filtersType.module.scss';
import { useWindowClick } from '../../../useEffect/useWindowClick';

const filters = [
  {
    title: 'Все',
    value: 'all',
    icon: <SvgFilterAll />
  },
  {
    title: 'Территория',
    value: 'territory',
    icon: <SvgLocation />
  },
  {
    title: 'Транспорт',
    value: 'transport',
    icon: <SvgCar />
  },
  {
    title: 'Недвижимость',
    value: 'realty',
    icon: <SvgHome />
  }
];

export interface IFiltersTypeProps {
  value?: string;
  setValue: (value: string) => void;
}

export const FiltersType: React.FC<IFiltersTypeProps> = (
  {
    value,
    setValue
  }
) => {
  const [isOpen, setOpen] = useWindowClick();
  const filterActive = filters.find(filter => filter.value === value) || filters[0];

  return (
    <>
      <div
        className={styles.filterDataActive}
        onClick={() => setOpen(v => !v)}
      >
        <span className={styles.icon}>
          {filterActive.icon}
        </span>
        <span className={styles.label}>{filterActive.title}</span>
        <span className={styles.chk}>
          <SvgChevronDown />
        </span>
      </div>
      <div
        className={cl(styles.filterWrap, {
          [styles.active]: isOpen
        })}
      >
        {filters.map(filter => (
          <div
            key={filter.value}
            className={cl(styles.filter, {
              [styles.active]: filter.value === value
            })}
            onClick={() => setValue(filter.value)}
          >
            <span className={styles.icon}>
              {filter.icon}
            </span>
            <span className={styles.label}>{filter.title}</span>
          </div>
        ))}
      </div>
    </>
  )
};
