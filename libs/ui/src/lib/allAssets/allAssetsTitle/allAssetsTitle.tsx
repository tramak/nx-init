import React from 'react';
import cl from 'classnames';
import styles from './allAssetsTitle.module.scss';
import { declOfNum } from '../../../utils/declOfNum';

export interface IAllAssetsTitle {
  data: number
}

export const AllAssetsTitle: React.FC<IAllAssetsTitle> = (
  {
    data
  }
) => {
  return (
    <div className={cl(styles.container, styles.block)}>
      <span className={styles.title}>Все активы</span>
      <span className={styles.data}>
        {`${data} ${declOfNum(data,['актив', 'актива', 'активов'])}`}
      </span>
    </div>
  )
};
