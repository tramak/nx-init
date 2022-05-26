import React from 'react';
import { SvgLocation } from '../../svg/svgLocation';
import { SvgCar } from '../../svg/svgCar';
import { SvgHome } from '../../svg/svgHome';
import styles from './assetIcon.module.scss';

export interface IAssetsIcon {
  type?: string;
}
export const AssetsIcon: React.FC<IAssetsIcon> = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'territory':
        return <SvgLocation />;
      case 'transport':
        return <SvgCar />;
      case 'realty':
        return <SvgHome />;
    }

    return null;
  };

  return (
    <i className={styles.icon}>
      {getIcon()}
    </i>
  )
};
